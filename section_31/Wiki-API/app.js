const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// mongoose setup
mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true });

const articleSchema = {
  title: String,
  content: String
};

const Article = mongoose.model("Article", articleSchema);

//GET all articles
app.get("/articles", function (req, res) {
  Article.find(function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// POST a new article
app.post("/articles", function (req, res) {
  const title = req.body.title;
  const content = req.body.content;

  const newArticle = new Article({
    title: title,
    content: content
  });

  newArticle.save(function (err) { 
    let message = "";
    if (!err) {
      message = "Article saved successfully";
    } else {
      message = err;
    }

    res.send(message);
  });
});


// DELETE all articles
app.delete("/articles", function (req, res) { 
  Article.deleteMany(function (err) {
    let message = "";
    if (!err) {
      message = "Successfully deleted all articles.";
    } else {
      message = err;
    }

    res.send(message);
  });
});

// server setup
app.listen(3000, function () {
  console.log("Server started on port 3000");
});