let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  console.log(list.value);
  if (!list.next) console.log("End");
  else printList(list.next);
}

printList(list);
while (true) {
  console.log(list.value);
  if (!list.next) {
    break;
  }
  list = list.next;
}
