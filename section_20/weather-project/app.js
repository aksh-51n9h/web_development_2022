const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) { 
    const url = "https://api.openweathermap.org/data/2.5/weather?appid=2b471d8d705491f5b160f0d5186293be&units=metric&id=1267995";

    https.get(url, function (response) { 
        // console.log(response.statusCode);

        response.on("data", function (data) { 
            // console.log(data);
            var weatherData = JSON.parse(data);
            var temp = weatherData.main.temp;
            var weatherDescription = weatherData.weather[0].description;

            console.log(weatherDescription);
            res.send("<h1>The temperature in India is "+ temp + " degree Celcius.</h1>");
        });
    });

    // res.send("working");
});

app.listen(3000, function () { 
    console.log("weather-project server started at 3000");
});