import React from 'react';
import { connect } from 'react-redux';

// Fiunction 
import graphStats from '../../../utl/grapgh-stats';

// Styles
import './styles.css';

const Graph = props => {

    return (
        <div className='graph-container'>
            { graphStats(props.books).map((value, i) => (
                <div className='graph-bar' style={{height: `${value}%`}} key={i}></div>
            ))}
        </div>
    )
}

const mapStateToProps = store => ({
    books: store.books.books
})

export default connect(mapStateToProps)(Graph);