import React, { Component } from 'react';
import './index.css';
import Loader from './components/Loader';
import pixabayApi from './services/pixabayApi';
import ImageGallery from './components/ImageGallery';
import Searchbar from './components/Searchbar';
import Button from './components/Button';

class App extends Component {
  state = {
    gallery: [],
    searchQuery: '',
    perPage: 3,
    page: 1,
    isLoading: false,
    error: null,
    selectedImg: '',
  };

  componentDidUpdate(prevProps, prevState) {
    // const { gallery, searchQuery, perPage, page } = this.state;
    if (this.state.searchQuery !== prevState.searchQuery) {
      this.fetchGallery();
    }
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
        }));
      })
      .catch(error => this.state({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { gallery, isLoading, error } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleChangeQuery} />
        {error && <h1>Введите запрос</h1>}

        {!isLoading && <ImageGallery gallery={this.state.gallery} />}
        {isLoading && <Loader />}
        {gallery.length > 0 && <Button onClick={this.fetchGallery} />}
      </>
    );
  }
}

export default App;
