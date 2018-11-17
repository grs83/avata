export default (value, books) => {
    let results = [];

    if (!Number(value)) {
        const regex = new RegExp(`^${value}`, 'gi');

        results = books.filter(book => book.author.search(regex) > -1 || book.title.search(regex) > -1);

    } else {
        results = books.filter(book => book.review_score >= Number(value));
    }
    
    return results;
}