import React from "react";

const Book = (props) => {
  const { img, title, author } = props;

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello World!");
  };

  const complexClick = (author) => {
    alert(author);
  };

  return (
    <section className="book" onMouseOver={() => console.log(title)}>
      <img src={img} />
      <h5 onClick={() => alert(title)}>{title}</h5>
      <h6>{author}</h6>
      <button onClick={clickHandler}>Hello alert!</button>
      <button onClick={() => complexClick(author)}>See Author</button>
    </section>
  );
};

export default Book;
