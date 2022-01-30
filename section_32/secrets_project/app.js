require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
// const mongooseEncryption = require("mongoose-encryption");
const md5 = require("md5");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));


// mongoose setup
mongoose.connect("mongodb://localhost:27017/usersDB", { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});


// const secret = process.env.SECRET;

// userSchema.plugin(mongooseEncryption, { secret: secret, encryptedFields: ["password"] });

const User = mongoose.model("User", userSchema);

app.get("/", function (req, res) {
    res.render("home");
});

app.route("/login")
    .get(function (req, res) {
        res.render("login");
    })

    .post(function (req, res) {
        const email = req.body.username;
        const password = req.body.password;

        User.findOne({ email: email }, function (err, foundUser) {
            if (err) {
                let message = "Error occured! No user found.";
                res.send(message);
            } else {

                bcrypt.compare(password, foundUser.password, function (err, result) {
                    if (result == true) {
                        res.render("secrets");
                    } else if (err) {
                        console.log(err);
                    } else {
                        let message = "Error occured! Wrong password";
                        res.send(message);
                    }
                });
            }
        });
    });

app.route("/register")
    .get(function (req, res) {
        res.render("register");
    })

    .post(function (req, res) {
        const email = req.body.username;
        const password = req.body.password;


        bcrypt.hash(password, saltRounds, function (err, hash) {
            const newUser = new User({
                email: email,
                password: hash
            });


            newUser.save(function (err) {
                if (err) {
                    let message = "Error occured! Unable to register.";
                    res.send(message);
                } else {
                    res.render("secrets");
                }
            });
        });
    });

app.get("/logout", function (req, res) {
    res.render("home");
});


app.listen(3000, function () {
    console.log("Server started at port 3000.");
})