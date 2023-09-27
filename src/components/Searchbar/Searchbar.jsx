import { Component } from 'react';
// import { getItems } from 'api/api';
import css from './Searchbar.module.css';

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
      <header>
        <form className={css.form} id="111" onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            // class="input"
            name="111"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
