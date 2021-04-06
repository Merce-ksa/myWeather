# myWeather

MyWeather is a weather forecast project! Access quickly to the local forecast.
You can see the project at [myWeather.com](https://)

![alt text](https://i.imgur.com/MIMx1jM.png?1)
![alt text](https://i.imgur.com/L1kGlEP.png?1)

## Dependencies

This project is bootstrapped with React.
It is full responsive and SASS has been used to give styles.
For testing, I've decided to use [Jest framework](https://jestjs.io/). 

## Folder structure

```
myWeather
│   .eslintrc.js
│   .gitignore
│   .env
│   package-lock.json   
│   package.json
│   README.md   
│
└───coverage
│
└───src
│   │   index.jsx
│   │   logo.svg
│   │   reportWebVitals.js
│   │   setupTests.js
│   │
│   └───assetts
│   │   └───fonts
│   │   └───images
│   │   └───styles
│   │
│   └───components
│   │   └───Header
│   │   |   │   Header.css
│   │   |   |   Header.scss
│   │   |   │   Header.jsx
│   │   |   │   Header.test.jsx
│   │   |
│   │   └───Home
│   │   |   │   Home.css
│   │   |   |   Home.scss
│   │   |   │   Home.jsx
│   │   |   │   Home.test.jsx
│   │   |
│   │   └───Weather
│   │       │   Weather.css
│   │       |   Weather.scss
│   │       │   Weather.jsx
│   │       │   Weather.test.jsx
│   │
│   └───services
│   |   │   api.config.js
│   |   │   weatherFetcher.js
│   |   │   weatherLocation.js
│   │
│   └───utils
│       │   dateFormater.js
│       │   unitsFormater.js

```

## API OpenWeather
To obtain the meteorological information, I have used the [OpenWeather](https://openweathermap.org/forecast5) API.
