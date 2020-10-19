import React from "react";
import ReactDom from "react-dom";

//stateless functional components
//always return JSX

// function Greeting() {
//   return <h4>this is shakti, and this is my first component</h4>;
// }

// const Greeting = () => {
//   return React.createElement("h1", {}, "hello World");
// };

// function Greeting() {
//   return (
//     <div>
//       <h1>this is shakti, and this is my first component</h1>
//     </div>
//   );
// }

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello World")
//   );
// };

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h1>John Doe</h1>;

const Message = () => {
  return <p>this is my first app</p>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));
