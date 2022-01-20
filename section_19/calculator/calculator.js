const express = require("express");

const app = express();

app.get("/", function (req, res) {
    // console.log(__dirname+"/index.html");
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function (req, res) {
    res.send("Everything is working fine.");
});

app.listen(3000, function () { 
    console.log("calculator server started at port 3000");
});