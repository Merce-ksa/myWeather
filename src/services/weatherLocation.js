class WeatherLocation {
  constructor(cityName, coord, summary, sunrise, sunset, icon, wind) {
    this.cityName = cityName;
    this.coord = coord;
    this.summary = summary;
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.icon = icon;
    this.wind = wind;
  }
}

export default WeatherLocation;
