const fetch = require("node-fetch");
const ow_api_key = process.env.OPENWEATHER_API_KEY;

//Recode the function weatherByCityName getting a city as input and return the temperature from Open Weather
function weatherByCity(city) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ow_api_key}&units=metric&lang=fr`)
    .then(response => response.json())
    .catch(error => error);
}


function weatherDetails (weatherArray){
    return weatherArray.map(weatherMoreDetails =>{
      return `
      <p> ${weatherMoreDetails.description}
      <img src="http://openweathermap.org/img/w/${weatherMoreDetails.icon}.png"/>`

  }).join("");
}

function getDay(day) {
  const dayObject = {date: new Date(day.dt*1000), temperature: day.main.temp, weathers: day.weather};
  return dayObject;
}

function getWeather(weather) {
  const weatherObject = {id: weather.id, main: weather.main, description: weather.description};
  return weatherObject;
}


weatherByCity("Lille").then(result => {
  console.log(JSON.stringify(result));
});


module.exports = {
  weatherByCity: weatherByCity,
  getDay: getDay,
  weatherDetails : weatherDetails,
  getWeather: getWeather
};
