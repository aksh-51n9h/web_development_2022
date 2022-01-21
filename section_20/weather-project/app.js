const express = require("express");
const app = express();

app.get("/", function (req, res) { 
    res.send("working");
});

app.listen(3000, function () { 
    console.log("weather-project server started at 3000");
});