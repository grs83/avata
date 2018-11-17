import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

// Components
import InputContainer from './input-container';
import Books from './books';

// Functions
import fetchBooks from '../utl/fetch-books';

// Styles
import './styles.css';


class App extends Component {

  componentDidMount() {
    fetchBooks((err, books) => {
      if(err) console.error(err);
      this.props.setBooks(books)
    })
  }

  render() {
    return (
      <div>
        <div className='header'></div>
        <InputContainer />
        <Books />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(actions.setBooks(books)),
})

export default connect(
  null,
  mapDispatchToProps
)(App);