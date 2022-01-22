const express = require("express");
const bodeParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodeParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
    var name = req.body.name;
    var email = req.body.email;

    console.log(name + " " + email);
});

app.listen(3000, function () {
    console.log("newsletter-signup server up and ready to serve.");
});