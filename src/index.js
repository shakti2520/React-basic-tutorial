import React from "react";
import ReactDOM from "react-dom";
// import book data
import { books } from "./booksData";
// import book component
import Book from "./Book";

//CSS
import "./Booklist.css";

function BookList() {
  return (
    <article className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </article>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
