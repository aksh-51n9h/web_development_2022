import React from "react";
import ReactDOM from "react-dom";

const firstName = "Akshay";
const lastName = "Singh";
const myLuckyNumber = 7;

ReactDOM.render(
  <div>
    <h1>
      Hello {firstName} {lastName}
    </h1>
    <p>My lucky number is {myLuckyNumber}</p>
  </div>,
  document.getElementById("root")
);
