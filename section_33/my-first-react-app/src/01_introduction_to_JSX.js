const React = require("react");
const ReactDOM = require("react-dom");

// ReactDOM.render(WHAT TO SHOW, WHERE TO SHOW, CALLBACK)

ReactDOM.render(<h1>Hello to React JS</h1>, document.getElementById("root"));

// render method accpets only single element

//inavild render method

// ReactDOM.render(<h1>Hello to React JS</h1><p>React is awesome</p>, document.getElementById("root"));

// in the above example we are trying to give two elements which is not allowed so that's why it is invalid.

// we can enclose them in one div

ReactDOM.render(
  <div>
    <h1>Hello to React JS</h1>
    <p>React is awesome</p>
  </div>, document.getElementById("root"));
