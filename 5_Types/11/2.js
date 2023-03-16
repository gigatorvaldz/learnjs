let getWeekDay = (d) => {
  const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return days[d.getDay()]
};

let date = new Date()
console.log(getWeekDay(date));