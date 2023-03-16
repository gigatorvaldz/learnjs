let arr = ["HTML", "JavaScript", "CSS"];

let copySorted = (arr) => {
    return JSON.parse(JSON.stringify(arr)).sort();
} 

let sorted = copySorted(arr);

alert( sorted );
alert( arr );