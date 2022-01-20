const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    // console.log(__dirname+"/index.html");
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var sum = num1 + num2;
    res.send("Hey buddy here is your result. "+ sum);
});

app.listen(3000, function () { 
    console.log("calculator server started at port 3000");
});