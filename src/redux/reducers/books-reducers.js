// Functions
import refineBooks from '../../utl/refine-books';

// Multi use variables
let books;

const initialState = {
    books: [],
    filteredBooks: []
};

const booksReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'setBooks':
        books = refineBooks(action.payload);

        return {
        ...state,
        books
        };

    case 'filteredBooks':
        return {
        ...state,
        filteredBooks: action.payload
    };

    default:
      return state;
  }
};

export default booksReducers;
