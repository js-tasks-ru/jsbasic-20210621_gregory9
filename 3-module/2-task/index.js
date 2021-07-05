function filterRange(arr, a, b) {
  let arrResult = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      arrResult.push(arr[i]);
    }
  }
  return arrResult;
}
