import React from 'react';
import { connect } from 'react-redux';

// Components
import Graph from './graph';

// Styles
import './styles.css'

const BookMetadata = ({ books }) => {

    return (
        <div className='metadata-container'>
            <div style={{marginRight: '30px'}}>
                <p style={{fontSize: '1.25rem'}}>Books</p>
                <h3 className='book-count'>{ books.length }</h3>
            </div>
            <Graph />
        </div>
    )
}

const mapStateToProps = store => ({
    books: store.books.books
})

export default connect(mapStateToProps)(BookMetadata);