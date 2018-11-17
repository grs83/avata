import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

// Components
import TextField from '@material-ui/core/TextField';

// Functions
import autocomplete from '../../utl/auto-complete';

// Styles
import './styles.css'

const Searchbar = props => {

    function handleChange(e) {
        let value = e.target.value;
        props.handleSeachValue(value);

        if (value.length > 1) {
            props.filteredBooks(autocomplete(value, props.books));
        } else {
            props.filteredBooks([]);
        }
    }

return (
    <div style={{width: '55%'}}>
        <TextField
        value={props.serachbarValue}
        onChange={handleChange}
        label="Search"
        margin="normal"
        variant="outlined"
        fullWidth
        className='serachbar'
        />
    </div>
);
}

const mapStateToProps = store => ({
    serachbarValue: store.state.searchBar,
    books: store.books.books
});

const mapDispatchToProps = dispatch => ({
  handleSeachValue: input => dispatch(actions.handleSeachValue(input)),
  filteredBooks: books => dispatch(actions.filteredBooks(books))
});

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);