function unique(arr) {
  let result = new Set(arr);
  return Array.from(result);
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

unique(strings);

alert(unique(strings)); // кришна, харе, :-O
