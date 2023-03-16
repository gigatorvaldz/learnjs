function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    },
    this.calculate = function (str) {
        let buf = str.split(" ")
        a = +buf[0]
        o = buf[1]
        b = +buf[2]

        if(!this.methods[o] || isNaN(a) || isNaN(b)) return "Error";

        return this.methods[o](a, b);
    },
    this.addMethod = function (methodName, f) {
        this.methods[methodName] = f;
    }
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");

console.log(result);