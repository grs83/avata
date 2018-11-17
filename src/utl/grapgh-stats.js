export default (books) => {
    const booksStats = {
        75: 0,
        80: 0,
        85: 0,
        90: 0,
        95: 0
    }

    books.forEach(book => {
        const rating = book.review_score;
        if (rating >= 95) {
            booksStats[95]++;
        } else if (rating >= 90) {
            booksStats[90]++;
        } else if(rating >= 85) {
            booksStats[85]++;
        } else if (rating >= 80) {
            booksStats[80]++;
        } else {
            booksStats[75]++
        }
    })

    const values = Object.values(booksStats).map(value => value * 4);

    return values;
}