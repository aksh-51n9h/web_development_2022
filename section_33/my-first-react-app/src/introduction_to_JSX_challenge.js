//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

const React = require("react");
const ReactDOM = require("react-dom");

ReactDOM.render(
  <div>
    <h1>My Favourite Subjects</h1>
    <ul>
      <li>Data Structure and Algorithms</li>
      <li>Computer Networks</li>
      <li>Computer Oraganization and Architecture</li>
    </ul>
  </div>,
  document.getElementById("root")
);
