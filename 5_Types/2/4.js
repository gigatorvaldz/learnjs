let random = (min, max) => {
  return Math.round(Math.random() * (max - min + 1) + (min - 0.5));
};

alert(random(1, 3));
