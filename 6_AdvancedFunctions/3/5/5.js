let arr = [1, 2, 3, 4, 5, 6, 7];


let inBetween = (a, b) => {
    return function (n) {
        return n >= a && n <= b
    }
}

let inArray = (args) => {
    return function (x) {
        return args.includes(x)
    }
}

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
