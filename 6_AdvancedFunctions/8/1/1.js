function printNumbers(from, to) {
  let counter = from - 1;
  let timerId = setTimeout(function count() {
    if (counter < to) {
      counter++;
      console.log(counter);
      timerId = setTimeout(count, 1000);
    }
  });
}

function printNumbers2(from, to) {
  let counter = from-1;
  let interval = setInterval(() => {
    if (counter < to) {
      counter++;
      console.log(counter);
    } else{
        clearInterval(interval)
    }
  }, 1000);
}

printNumbers2(1, 10);
