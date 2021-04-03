function dateFormater(date) {
  return new Date(date * 1000).toLocaleString();
}

export default dateFormater;
