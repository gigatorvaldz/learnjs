let getSecondsToday = () => {
  let now = new Date();
  let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let result = now - date;
  result = Math.round(result / 1000)
  return result;
}

alert(getSecondsToday());
