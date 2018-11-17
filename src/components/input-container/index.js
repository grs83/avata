import React from 'react';

// Components
import Searchbar from '../searchbar';
import BookMetadata from '../books-metadata';

// Styles
import './styles.css';


export default () => {
    return (
        <div className='input-container'>
            <Searchbar />
            <BookMetadata />
        </div>
    )
}