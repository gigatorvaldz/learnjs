let camelize = (str) => {
  return str
    .split("-")
    .map((el, i) => {
      if (i == 0) {
        return el;
      } else {
        return el[0].toUpperCase() + el.slice(1);
      }
    })
    .join("");
};