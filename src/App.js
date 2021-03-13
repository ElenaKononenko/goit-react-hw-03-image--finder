import React, { Component } from 'react';
import './index.css';
import Loader from './components/Loader';
import pixabayApi from './services/pixabayApi';
import ImageGallery from './components/ImageGallery';

class App extends Component {
  state = { gallery: [] };

  componentDidMount() {
    console.log('componentDidMount');
    if (!this.state.gallery.length) {
      pixabayApi.getFetch().then(data => {
        console.log('data', data);
        this.setState({ gallery: [...data] });
        console.log('this.state.gallery', this.state.gallery.length);
      });
    }
  }
  // componentDidUpdate() {}
  render() {
    return (
      <>
        <Loader />
        <ImageGallery gallery={this.state.gallery} />
      </>
    );
  }
}

export default App;
