const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {

  const url ="https://api.openweathermap.org/data/2.5/weather?q=Edinburgh&appid=yourAPI&units=imperial";

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<p>The weather is currently " + weatherDescription + ".</p>");
      res.write("<h1>The temperature in Edinburgh is " + temp + " degrees.</h1>");
      res.write("<img src=" + imageURL + ">");
      res.send()
    })
  })
})




app.listen(3000, function(){
  console.log("Server is running. ")
});
