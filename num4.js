function findSum(arr) {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
      sum += arr[i];
      i++;
    }
    
    return sum;
  }

  const numbers = [3, 7, 2, 8, 1];

  console.log("Sum of elements:", findSum(numbers));
  