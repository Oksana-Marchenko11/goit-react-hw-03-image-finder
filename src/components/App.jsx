import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getItems } from 'api/api';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    isLoading: false,
    searchName: '',
    images: [],
    error: null,
    currentPage: 1,
    totalPages: 0,
  };
  componentDidUpdate(_, prevState) {
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.currentPage !== this.state.currentPage
    ) {
      getItems(
        this.state,
        this.setState.bind(this),
        this.state.searchName,
        this.state.currentPage
      );
      this.setState({ isLoading: true });
    }
  }
  handleSubmit = searchValue => {
    this.setState({ searchName: searchValue });
    this.setState({ currentPage: 1 });
    console.log(this.state);
    // console.log(this.state.totalPages);
  };

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
    // console.log(this.state.currentPage);
    console.log(this.state);
  };

  render() {
    const { images, currentPage, totalPages, isLoading } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        <ImageGallery data={this.state.images} />
        {images.length > 0 && totalPages !== currentPage && (
          <Button loadMore={this.loadMore} />
        )}
      </div>
    );
  }
}
