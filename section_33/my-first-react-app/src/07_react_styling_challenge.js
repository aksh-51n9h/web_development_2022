//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const hrs = date.getHours();

const customStyle = { color: "red" };

let message = "";

if (hrs >= 0 && hrs < 12) {
  message = "Good morning";
  customStyle.color = "red";
} else if (hrs >= 12 && hrs < 6) {
  message = "Good evening";
  customStyle.color = "green";
} else {
  message = "Good evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {message}
  </h1>,
  document.getElementById("root")
);
