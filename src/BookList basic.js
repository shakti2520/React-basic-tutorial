import React from "react";
import ReactDOM from "react-dom";

import "./Booklist.css";

function BookList() {
  return (
    <article className="booklist">
      <Book1
        img="https://images-eu.ssl-images-amazon.com/images/I/81s6DUyQCZL._AC_UL200_SR200,200_.jpg"
        author="Jay Shetty"
        name="Think Like a Monk"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sequi.
          Eius in dolorem saepe eligendi enim nesciunt ullam nihil magni.
        </p>
      </Book1>

      <Book1
        img="https://images-eu.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_UL200_SR200,200_.jpg"
        name="The Psychology of Money"
        author="Morgan Housel"
      />

      <Book2
        img="https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg"
        author="Paulo Coelho"
        name="The Alchemist"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sequi.
          Eius in dolorem saepe eligendi enim nesciunt ullam nihil magni.
        </p>
      </Book2>

      <Book3
        img="https://images-eu.ssl-images-amazon.com/images/I/81gTwYAhU7L._AC_UL200_SR200,200_.jpg"
        author="Joseph Murphy"
        name="The Power of your Subconscious Mind"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sequi.
          Eius in dolorem saepe eligendi enim nesciunt ullam nihil magni.
        </p>
      </Book3>
      <Book4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sequi.
          Eius in dolorem saepe eligendi enim nesciunt ullam nihil magni.
        </p>
      </Book4>
    </article>
  );
}

const Book1 = (props) => {
  return (
    <div className="book">
      <img src={props.img} />
      <h4>{props.name}</h4>
      <h5>{props.author}</h5>
      {props.children}
    </div>
  );
};

const Book2 = (props) => {
  const { img, name, author, children } = props;
  return (
    <div className="book">
      <img src={img} />
      <h4>{name}</h4>
      <h5>{author}</h5>
      {children}
    </div>
  );
};

const Book3 = ({ img, name, author, children }) => {
  return (
    <div className="book">
      <img src={img} />
      <h4>{name}</h4>
      <h5>{author}</h5>
      {children}
    </div>
  );
};

const details = {
  img:
    "https://images-eu.ssl-images-amazon.com/images/I/710jnzKlDTL._AC_UL200_SR200,200_.jpg",
  name: "Attitude Is Everything: Change Your Attitude Change your life",
  author: "Jeff Keller",
};

function Book4(props) {
  const { img, name, author } = details;
  return (
    <div className="book">
      <img src={img} />
      <h4>{name}</h4>
      <h5>{author}</h5>
      {props.children}
    </div>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
