import React from "react";
import ReactDOM from "react-dom";


//this will not work in JSX
ReactDOM.render(<h1 style="color:red">Hello World!</h1>, document.getElementById("root"));

// inline stying in JSX = JSX expression + map
ReactDOM.render(<h1 style={{ color: "red" }}>Hello World!</h1>, document.getElementById("root"));

// we can also store map in variable
const myStyle = {
    color: "red",
    fontSize: "20px",
};
ReactDOM.render(<h1 style={myStyle}>Hello World!</h1>, document.getElementById("root"));

