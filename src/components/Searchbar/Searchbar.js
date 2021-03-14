import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    value: '',
  };
  onChangeSearch = e => {
    this.setState({ value: e.currentTarget.value });
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    // this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.onSubmitForm} className={s.SearchForm}>
          <button type="submit" className={s.SearchForm__button}>
            <span className={s.SearchForm__button__label}>Search</span>
          </button>

          <input
            onChange={this.onChangeSearch}
            className={s.SearchForm__input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={value}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
