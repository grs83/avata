// Functions

// Multi use variables
let searchBar;

const initialState = {
    searchBar: '',
    autoComplete: [],
};

const stateReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'handleSeachValue':
        searchBar = action.payload;
        
        return {
        ...state,
        searchBar
        };

    default:
      return state;
  }
};

export default stateReducers;
