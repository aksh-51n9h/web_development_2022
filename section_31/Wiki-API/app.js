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

// articles - Chained route handlers 
app.route("/articles")
  .get(function (req, res) {
    Article.find(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  })

  .post(function (req, res) {
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
  })

  .delete(function (req, res) {
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


// articles/articleTitle - chained route handlers
app.route("/articles/:articleTitle")
  .get(function (req, res) {
    const articleTitle = req.params.articleTitle;
    Article.findOne({ title: articleTitle }, function (err, result) {
      if (err) {
        console.log(err);
        res.send("Some error occured");
      } else if (result) {
        res.send(result);
      } else {
        res.send("No articles matching that title was found.");
      }
    });
  })

  .put(function (req, res) {
    const articleTitle = req.params.articleTitle;

    // updated title and content
    const title = req.body.title;
    const content = req.body.content;


    Article.replaceOne(
      { title: articleTitle },
      {
        title: title, content: content
      },
      function (err) {
        if (!err) {
          res.send("Successfully updated article.");
        } else {
          console.log(err);
          res.send("Some error occured.");
        }
      });
  })

  .patch(function (req, res) {
    const articleTitle = req.params.articleTitle;

    const reqBody = req.body;

    Article.updateOne({ title: articleTitle },
      { $set: reqBody },
      function (err) {
        if (!err) {
          res.send("Successfully updated article.");
        } else {
          console.log(err);
          res.send("Some error occured.");
        }
      });
  })

  .delete(function (req, res) { 
    const articleTitle = req.params.articleTitle;

    Article.deleteOne({ title: articleTitle }, function (err) {
      let message = "";
      if (!err) {
        message = "Successfully deleted article.";
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

// finish section 31