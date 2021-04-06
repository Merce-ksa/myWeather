function unitsFormater(metricSystem, magnitude) {
  if (metricSystem === 'metric') {
    switch (magnitude) {
      case 'speed':
        return 'm/s';
      default:
        return 'ºC';
    }
  } else {
    switch (magnitude) {
      case 'speed':
        return 'mph';
      default:
        return 'ºF';
    }
  }
}

export default unitsFormater;
