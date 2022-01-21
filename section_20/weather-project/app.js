const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) { 
    const url = "https://api.openweathermap.org/data/2.5/weather?appid=2b471d8d705491f5b160f0d5186293be&q=India&units=metric";

    https.get(url, function (response) { 
        // console.log(response.statusCode);

        response.on("data", function (data) { 
            // console.log(data);
            var weatherData = JSON.parse(data);
            console.log(weatherData.weather[0].description);
        });
    });

    res.send("working");
});

app.listen(3000, function () { 
    console.log("weather-project server started at 3000");
});