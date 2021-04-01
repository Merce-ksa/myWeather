import axios from 'axios';
import WeatherLocation from './weatherLocation';

async function weatherFetcher(cityName, units) {
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&&lang=sp&units=${units}&appid=3c74ac129f18ab59e709f229523cbc05`)
    .then((res) => new WeatherLocation(
      res.data.name,
      res.data.coord,
      res.data.main,
      res.data.sys.sunrise,
      res.data.sys.sunset,
      res.data.weather[0].icon,
      res.data.wind
    ));
}

export default weatherFetcher;
