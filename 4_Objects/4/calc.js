let calculator = {
  read() {
    this.a = Number(prompt("a:"))
    this.b = Number(prompt("b:"))
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

