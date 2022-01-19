const express = require("express");

const app = express();

app.get("/", function (req, res) {
    res.send("<h1>My first express server</h1>");
});

app.get("/contact", function (req, res) {
    res.send("Contact: singh2104.akshay@gmail.com");
});

// #230 challenge 1
app.get("/about", function (req, res) {
    res.send("Author: Akshay");
});

app.listen(3000, function () { 
    console.log("server started at port 3000");
});