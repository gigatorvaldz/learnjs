let fib = (n) => {
  let last = [1, 1];
  for (let i = 2; i < n; i++) {
    last.push(last[0] + last[1]);
    last.shift();
  }
  return last[1];
};

let fib2 = (n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
} 

console.log(fib(77));
console.log(fib2(77));
