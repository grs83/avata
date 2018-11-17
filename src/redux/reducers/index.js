import { combineReducers } from 'redux';

// Reducers
import stateReducers from './state-reducers';
import booksReducers from './books-reducers';

const combinedReducers = combineReducers({
    state: stateReducers,
    books: booksReducers
});

export default combinedReducers;