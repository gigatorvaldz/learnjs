function readNumber() {
  let num;

  while (!isFinite(num)) {
    num = prompt("num:");
  }

  if (num === null || num === "") return null;

  return Number(num);
}
alert(readNumber());
