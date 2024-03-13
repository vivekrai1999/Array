const arr = [3, 2, 1, 50, 2, 10];

let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (largest > arr[i]) {
    largest = largest;
  } else {
    largest = arr[i];
  }
}

console.log(largest);
