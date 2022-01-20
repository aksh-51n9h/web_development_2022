const express = require("express");

const app = express();

app.listen(3000, function () { 
    console.log("calculator server started at port 3000");
});