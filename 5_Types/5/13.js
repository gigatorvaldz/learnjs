let groupById = (arr) => {
  return arr.reduce((a, b) => {
    a[b.id] = b;
    return a;
  }, {});
}

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];

console.log(groupById(users));