let table = document.body.firstElementChild;
let tbody = table.firstElementChild;

let counter = 0;
for (let i = 0; i < tbody.childElementCount; i++) {
    tbody.children[i].children[counter].style.backgroundColor = 'red';
    counter++;
}