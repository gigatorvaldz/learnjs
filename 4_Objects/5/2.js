function Calculator() {
  return {
    read() {
      this.a = Number(prompt("a:"));
      this.b = Number(prompt("b:"));
    },
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    },
  };
};

let calculator = new Calculator();
console.log(calculator);
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
