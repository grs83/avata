export default (books) => {
    const filteredBooks = books.filter(book => book.review_score >= 75);
    const sortedBooks = filteredBooks.sort((a, b) => b.review_score - a.review_score);
    return sortedBooks.filter((book, i) => i <= 49);
}