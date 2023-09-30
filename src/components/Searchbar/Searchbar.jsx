import { Component } from 'react';
import React from 'react';
import {
  SearchbarDiv,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
  SearchFormButtonLabel,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleChange = e => {
    this.setState({ searchValue: e.target.value });
    console.log(this.state.searchValue);
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state.searchValue);
    this.props.onSubmit(this.state.searchValue);
  };

  render() {
    return (
      <SearchbarDiv>
        <SearchForm id="111" onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormBtn>

          <SearchFormInput
            name="111"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarDiv>
    );
  }
}
