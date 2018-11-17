export const setBooks = books => ({
    type: 'setBooks',
    payload: books
});

export const handleSeachValue = value => ({
    type: 'handleSeachValue',
    payload: value
});

export const filteredBooks = books => ({
    type: 'filteredBooks',
    payload: books
});