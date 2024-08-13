function factorial(num) {
    let result = 1;
    let currentNumber = num;
  
    while (currentNumber > 0) {
      result *= currentNumber;
      currentNumber--;
    }
  
    return result;
  }
  