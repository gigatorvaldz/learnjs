let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

let sumSalaries = (obj) => {
    let res = 0;
    for (const iterator of Object.values(obj)) {
        res += iterator;
    }
    return res;
}

console.log(sumSalaries(salaries)); // 650
