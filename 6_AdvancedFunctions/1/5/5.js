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

function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
}

printReverseList(list);

let printReverseList2 = (list) => {
    let arr = []

  while (true) {
    arr.push(list.value)
    if (!list.next) {
      break;
    }
    list = list.next;
  }

  for (let i = arr.length-1; i >= 0 ; i--) {
    console.log(arr[i]);    
  }
};

printReverseList2(list)
