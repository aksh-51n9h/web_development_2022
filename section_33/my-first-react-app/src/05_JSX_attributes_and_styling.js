import React from "react";
import ReactDOM from "react-dom";

const imgURL = "https://picsum.photos/600";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img src={imgURL} alt="random_image"/>
    </div>
  </div>,
  document.getElementById("root")
);


//write attributes name in camel case