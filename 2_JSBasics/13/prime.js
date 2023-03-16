let n = 31;

flag: for (let number = 2; number <= n; number++) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      continue flag;
    }
  }
  alert(number);
}
