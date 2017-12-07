const request = require ('request');

const API_KEY = process.env.OPENWEATHER_API_KEY;


function weatherByCity (cityNameToWeather) {
  return request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?q=${cityNameToWeather}&units=metric&APPID=${API_KEY}`,
      method: "GET"
    },
    function(error, response, result) {
      // console.log("error:", error); // Print the error if one occurred
      // console.log("statusCode:", response); // Print the response status code if a response was received
      const jsonParseResult = JSON.parse(result);
      return `${jsonParseResult.main.temp} °C`;
    }
  );
}

weatherByCity("London");

module.exports = weatherByCity;
