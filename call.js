
const numbers = [5, 10, 15, 20, 25];
const doubleNumbers = (nums) => {
  return nums.map(num => num * 2);
}
const doubled = doubleNumbers(numbers);
console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubled);
