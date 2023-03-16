let sumTo = (n, sum = 0) => {
  if (n == 0) return sum;
  sum += n + sumTo(n - 1, sum);
  return sum;
};

let sumTo2 = (n) => {
  let sum = 0;
  for (let i = n; i > 0; i--) {
    sum += i;
  }
  return sum;
};

let sumTo3 = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(sumTo3(4));
