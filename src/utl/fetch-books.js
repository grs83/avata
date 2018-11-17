export default (cb) => {
    fetch('https://di37ol03g7.execute-api.us-west-2.amazonaws.com/dev/', {
        method: 'POST',
    })
    .then(data => data.json())
    .then(books => cb(null, books.results))
    .catch(err => cb(err))
}