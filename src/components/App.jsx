import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGalleryItem } from './ImageGallery/ImageGalleryItem';
import { getItems } from 'api/api';

export class App extends Component {
  state = {
    isLoading: false,
    searchName: '',
    images: [],
    error: null,
    isLoading: false,
    currentPage: 1,
    totalPages: 0,
  };
  handleSubmit = async searchValue => {
    this.setState({ searchName: searchValue });
    await getItems(this.setState.bind(this), this.state.searchName);
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGalleryItem data={this.state.images} />
      </div>
    );
  }
}
