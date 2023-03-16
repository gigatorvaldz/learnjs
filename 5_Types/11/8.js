let formatDate = (date) => {
  let now = new Date();
  let d = now - date;

  if (d < 1000) {
    return "прямо сейчас";
  }
  if (d < 60000) {
    return Math.floor(d / 1000) + " сек. назад";
  }
  let inMin =  Math.floor(d / 60000)
  if (inMin < 60) {
    return inMin + " мин. назад";
  }

  return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + ", " + date.getHours() + ":" + date.getMinutes(); 
};

alert(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date() - 86400 * 1000)));
