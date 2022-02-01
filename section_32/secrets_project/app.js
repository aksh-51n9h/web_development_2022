require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(session({
    secret: "this is my secret page",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


// mongoose setup
mongoose.connect("mongodb://localhost:27017/usersDB", { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function (req, res) {
    res.render("home");
});

app.route("/secrets")
    .get(function (req, res) {
        if (req.isAuthenticated()) {
            res.render("secrets");
        } else {
            res.redirect("/login");
        }
    });

app.route("/login")
    .get(function (req, res) {
        res.render("login");
    })

    .post(function (req, res) {
        const username = req.body.username;
        const password = req.body.password;

        const user = new User({
            username: username,
            password: password
        });

        req.login(user, function (err) {
            if (err) {
                console.log(err);
                res.send("Error occured!");
            } else {
                passport.authenticate("local")(req, res, function () {
                    res.redirect("/secrets");
                });
            }
        });
    });

app.route("/register")
    .get(function (req, res) {
        res.render("register");
    })

    .post(function (req, res) {
        const username = req.body.username;
        const password = req.body.password;

        User.register({ username: username }, password, function (err, user) {
            if (err) {
                console.log(err);
                res.redirect("/register");
            } else {
                passport.authenticate("local")(req, res, function () {
                    res.redirect("/secrets");
                });
            }
        });
    });

app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});


app.listen(3000, function () {
    console.log("Server started at port 3000.");
})