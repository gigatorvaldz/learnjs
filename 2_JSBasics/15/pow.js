function pow(number, n) {
  let result = number;
  for (let i = 0; i < n; i++) {
    result *= number;
  }
  return result;
}

let num = prompt("Number:")
let n = prompt("n:")
num < 1 ? alert("Error") : alert(pow(num, n))