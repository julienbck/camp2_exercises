const request = require ('request');

const API_KEY = process.env.OPENWEATHER_API_KEY;

function weatherByLatitudeAndLongitude (latitude, longitude){

  return request(
    {
      url: `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&APPID=${API_KEY}`,
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    },
    function(error, response, result) {
      // console.log("error:", error); // Print the error if one occurred
      // console.log("statusCode:", response); // Print the response status code if a response was received
      // const jsonParseResult = JSON.parse(result);
      // return `${jsonParseResult.weather}`;
      const jsonParseResult = JSON.parse(result);
      console.log(jsonParseResult.list.map(forecast => {
        const date = new Date(forecast.dt * 1000);
        const year = date.getFullYear();
        const month = date.getUTCMonth() +1;
        const day = date.getUTCDate();
        const fullDate = day + "/" + month + "/" + year;
        // const temperature = forecast.main[0];
        return {
          date: fullDate,
          temperature : forecast.main["temp"],
          weather : forecast.weather[0]
        };
      }));
      // console.log(jsonParseResult.list[0].dt + " " + jsonParseResult.list[0].weather[0]);
    }
  );
}
weatherByLatitudeAndLongitude(32.661343, 51.680374);

function weatherByZipcode (zipCode, countrycode){
  request(
    {
      url: `http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},${countrycode}&units=metric&APPID=${API_KEY}`,
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    },
    function(error, response, result) {
      // console.log("error:", error); // Print the error if one occurred
      // console.log("statusCode:", response); // Print the response status code if a response was received
      // const jsonParseResult = JSON.parse(result);
      // return `${jsonParseResult.weather}`;
      const jsonParseResult = JSON.parse(result);
      console.log(jsonParseResult.list.map(forecast => {
        const date = new Date(forecast.dt * 1000);
        const year = date.getFullYear();
        const month = date.getUTCMonth() +1;
        const day = date.getUTCDate();
        const fullDate = day + "/" + month + "/" + year;
        // const temperature = forecast.main[0];
        return {
          date: fullDate,
          temperature : forecast.main["temp"],
          weather : forecast.weather[0]
        };
      }));
      // console.log(jsonParseResult.list[0].dt + " " + jsonParseResult.list[0].weather[0]);
    }
  );
}

weatherByZipcode(59000, "fr");

module.exports = {
  weatherByLatitudeAndLongitude : weatherByLatitudeAndLongitude,
  weatherByZipcode : weatherByZipcode
};
