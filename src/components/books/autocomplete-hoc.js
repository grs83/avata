import React from 'react';
import { connect } from 'react-redux';

// Styles
import './styles.css'

export default (WrappedComponent) => {
    const AutocompleteHOC = (props) => {

        if (props.filteredBooks.length) {
            return (
                <div className='books-wrapper'>
                   <WrappedComponent books={props.filteredBooks}/>  
                </div>
            )
        } else if (!props.filteredBooks.length && props.serachbarValue.length > 1){
            return (
                <div className='books-wrapper'>
                    <h2>Sorry, no matches</h2>
                </div>
            )
        } else {
            return (
                <div className='books-wrapper'>
                    <WrappedComponent {...props}/> 
                </div>
            )
        }
    }
    
    const mapStateToProps = store => ({
        serachbarValue: store.state.searchBar,
        books: store.books.books,
        filteredBooks: store.books.filteredBooks
    });

    return connect(mapStateToProps)(AutocompleteHOC);
}