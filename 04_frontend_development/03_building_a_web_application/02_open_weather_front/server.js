const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const weather = require ("./weather.js")


let linkUrlToCityWeather = "Paris";

app.get('/', function(req, res) {

    weather.weatherByCity(`${linkUrlToCityWeather}`).then((weatherResult) => {
      const weatherDescription = weatherResult.weather.map(x => x.description).join('-');
      const weatherIcon = weatherResult.weather.map(x => x.icon).join('');
      res.send(`<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
          <title>Weather at ${weatherResult.name}</title>
        </head>
        <body>
          <div class="container">

          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" id="inputCityWeather" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" id="searchCity">Search</button>
            </form>

            <script>
            const inputValue = document.getElementById("inputCityWeather").value;
            const myInput = myInput.addEventListener("click", function() {

              let linkUrlToCityWeather = inputValue;
              alert(linkUrlToCityWeather);
            });

            </script>

            <div class="card" style="width: 20rem">
               <div class="card-header bg-light text-dark font-weight-bold" style="font-size:30pt">${weatherResult.name} <img src="http://openweathermap.org/img/w/${weatherResult.weather[0].icon}.png" style="float:right; width:30%" />
                <h6 class="card-subtitle mb-2 text-muted">${weatherResult.sys.country}</h6>
               </div>
               <div class="card-body bg-dark text-white">
                  <div class="row">
                  <div class="col-xs-3 offset-md-3"><p class="card-text font-weight-bold" style="font-size:30pt"> ${weatherResult.main.temp}°C</p></div>
                  <div class="col-xs-3 offset-md-3">${weatherResult.weather[0].description}</div>
                  </div>
                </div>
              </div>
          </div>
        </body>
      </html>`

      );
    })
});

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
