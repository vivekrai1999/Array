const arr = [1, 6, 2, 4, 7, 7, 5, 10];

let largest = arr[0];
let secLargest = -1;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    if (largest > secLargest) {
      secLargest = largest;
      largest = arr[i];
    }
  } else if (arr[i] < largest) {
    if (arr[i] > secLargest) {
      secLargest = arr[i];
    }
  }
}

console.log(secLargest);
