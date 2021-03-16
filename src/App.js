import React, { Component } from 'react';
import './index.css';
import s from './App.module.css';
import Loader from './components/Loader';
import pixabayApi from './services/pixabayApi';
import ImageGallery from './components/ImageGallery';
import Searchbar from './components/Searchbar';
import Button from './components/Button';
import Modal from './components/Modal';
class App extends Component {
  state = {
    gallery: [],
    searchQuery: '',
    perPage: 12,
    page: 1,
    data: [],
    isLoading: false,
    error: null,
    selectedImg: '',
    showModal: false,
    tags: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchQuery !== prevState.searchQuery) {
      this.fetchGallery();
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  handleChangeQuery = query => {
    if (query === this.state.searchQuery) {
      this.fetchGallery();
    } else {
      this.setState({ searchQuery: query, page: 1, gallery: [], error: null });
    }
  };

  fetchGallery = () => {
    const { perPage, page, searchQuery } = this.state;
    const option = {
      searchQuery,
      perPage,
      page,
    };
    this.setState({ isLoading: true });
    pixabayApi
      .getFetch(option)
      .then(data => {
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...data],
          page: prevState.page + 1,
          data,
        }));

        //можно еще так скролл сделать, но уже через стек с таймаутом
        // setTimeout(() => {
        //   window.scrollTo({
        //     top: document.documentElement.scrollHeight,
        //     behavior: 'smooth',
        //   });
        // }, 0);
      })
      .catch(error => this.state({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleModalImages = (img, tags) => {
    this.setState({ selectedImg: img, tags });
  };

  render() {
    const {
      gallery,
      isLoading,
      error,
      perPage,
      data,
      showModal,
      selectedImg,
      tags,
    } = this.state;

    // function fits(y, x) {
    //   if (y === 0) {
    //     return false;
    //   } else if (Number.isInteger(y / x)) {
    //     return true;
    //   }
    //   return false;
    // }

    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleChangeQuery} />
        {error && <h1>Введите запрос</h1>}
        {gallery.length ? (
          <ImageGallery
            gallery={this.state.gallery}
            modalImg={this.handleModalImages}
            showModal={this.toggleModal}
          />
        ) : (
          <h1 style={{ textAlign: 'center', color: '#3f51b5' }}>
            Введите запрос
          </h1>
        )}
        {/* {fits(Number(this.state.gallery.length), Number(perPage)) &&
          !isLoading && <Button onClick={this.fetchGallery} />} */}
        {data.length === perPage && !isLoading && (
          <Button onClick={this.fetchGallery} />
        )}
        {isLoading && <Loader />}
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            selectedImg={selectedImg}
            tags={tags}
          />
        )}
      </div>
    );
  }
}

export default App;
