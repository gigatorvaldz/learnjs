let getMaxSubSum = (arr) => {
  let max = 0;
  let curSum = 0;

  for (let item of arr) {
    curSum += item;
    if (max < curSum) max = curSum;
    if (curSum < 0) curSum = 0;
  }

  return max;
}

getMaxSubSum([-1, 2, 3, -9]);
getMaxSubSum([2, -1, 2, 3, -9]);
getMaxSubSum([-1, 2, 3, -9, 11]);
getMaxSubSum([-2, -1, 1, 2]);
getMaxSubSum([100, -9, 2, -3, 5]);
getMaxSubSum([1, 2, 3]);
