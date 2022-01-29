const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));


// mongoose setup
mongoose.connect("mongodb://localhost:27017/usersDB", { useNewUrlParser: true });

const userSchema = {
    email: String,
    password: String
};

const User = mongoose.model("User", userSchema);

app.get("/", function (req, res) {
    res.render("home");
});

app.route("/login")
    .get(function (req, res) {
        res.render("login");
    })

    .post(function (req, res) {

    });

app.route("/register")
    .get(function (req, res) {
        res.render("register");
    })
    
    .post(function (req, res) { 
        
    });


app.listen(3000, function () {
    console.log("Server started at port 3000.");
})