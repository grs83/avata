"The-Book" is a commercial website that reviews books based on user feedback. Using state-of-the-art AI algorithms, a book score is generated based on user activity, events, and trending news all over the web. The scoring system is a resulting number between 1-100 for each reviewed book. The AI algorithms employed by “The-Book” update the scores of each book based on new ingested data, giving a higher or lower score each time a search occurs.

At Avata Intelligence, we are interested in presenting our AI results simply and cleanly to our customers.

API:
"The-Book" has been kind enough to open their APIs for our internal use.
You can fetch the data using a POST CALL to URI: https://di37ol03g7.execute-api.us-west-2.amazonaws.com/dev/

The JSON structure of the API response is:
[
    {
        "author": STRING,
    	"summary": STRING,
        "review_score": INTEGER,
        "title": STRING
    }, ...
]

Task:
Design a responsive web application in React to display top 50 books whose score are higher than 75 sorted by title.

UI must include:
One or more components from Material UI (https://material-ui.com/) or design your own
Add a search bar with autocomplete based on the author, score, and title fields
Add a chart to show distribution of scores of all books in the current epoch

Evaluation:
Creativity in presentation of data and use of CSS for responsiveness
Reusability of code and components
Use of function programming methods. Example: map, filter, reduce, etc.

We encourage you to use ESLint, ECMAScript 6+ and Material Design

An example UI wireframe is attached.  The design is an example and purely that.  If you feel inclined, design an entirely new wireframe.  Use this opportunity to display your creativity and personal style.

We assume you will program the solution by yourself. However, in the event you implement existing code, we expect a proper code reference.

Good luck!