function Accumulator(startingValue) {
    return {
        value: startingValue,
        read () {
            this.value += +prompt("value + ")
        }
    }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений
