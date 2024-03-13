const arr = [1, 2, 2, 3, 4, 4, 4];

let isSorted = false;
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i + 1] >= arr[i]) {
    isSorted = true;
  } else {
    isSorted = false;
    break;
  }
}

console.log(isSorted);
