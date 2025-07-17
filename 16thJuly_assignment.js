// 1. How would you flatten a deeply nested array (e.g., [1, [2, [3, [4]], 5]]) to a single array using recursion or a built-in method?
function flatten(arr) {
  return arr.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}
console.log(flatten([1, [2, [3, [4]], 5]]));

// 2. Given an array of numbers, how do you remove all duplicate values without using Set?
function removeDuplicates(arr) {
  const result = [];
  for (let val of arr) {
    if (!result.includes(val)) {
      result.push(val);
    }
  }
  return result;
}

// 3. What will be the output of the following?
const a1 = [1, 2, 3];
const b1 = a1;
b1.push(4);
console.log(a1); // [1, 2, 3, 4]

// 4. How would you find the second largest number in an array like [10, 5, 8, 1, 9] without sorting?
function secondLargest(arr) {
  let max = -Infinity, second = -Infinity;
  for (let n of arr) {
    if (n > max) {
      second = max;
      max = n;
    } else if (n > second && n !== max) {
      second = n;
    }
  }
  return second;
}
console.log(secondLargest([10, 5, 8, 1, 9])); // 9

// 5. How do you count the number of occurrences of each element in an array?
// Example: [1, 2, 2, 3, 1, 1] → {1: 3, 2: 2, 3: 1}
function countOccurrences(arr) {
  const counts = {};
  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }
  return counts;
}
console.log(countOccurrences([1, 2, 2, 3, 1, 1])); // {1: 3, 2: 2, 3: 1}

// 6. Write a custom implementation of the .map() method (polyfill).
Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
console.log([1, 2, 3].myMap(x => x * 2)); // [2, 4, 6]

// 7. How do you sort an array of objects by multiple properties?
// Example: [{name: "John", age: 30}, {name: "Alice", age: 25}, {name: "John", age: 22}]
// Sort by name (alphabetical), then age (ascending)
const people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "John", age: 22 }
];
people.sort((a, b) => {
  if (a.name === b.name) {
    return a.age - b.age;
  }
  return a.name.localeCompare(b.name);
});
console.log(people);

// 8. Given an array of numbers, return a new array containing only the elements that are prime numbers.
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function getPrimes(arr) {
  return arr.filter(isPrime);
}
console.log(getPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [2, 3, 5, 7]

// 9. What will this code output and why?
const arr1 = [1, 2, 3];
arr1.length = 0;
console.log(arr1[0]); // undefined

// 10. What’s the difference between Array.prototype.forEach and Array.prototype.map in terms of return value and use-case?
// forEach: no return value, used for side effects
// map: returns new array with transformed elements

// 11. What is the result of this?
const a2 = [1, 2, 3];
const b2 = a2.slice(0, 2);
b2[0] = 100;
console.log(a2); // [1, 2, 3]

// 12. How do you find all pairs of elements in an array whose sum equals a target number?
// Example: [1, 2, 3, 4, 5], target = 6 → [[1,5], [2,4]]
function findPairs(arr, target) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}
console.log(findPairs([1, 2, 3, 4, 5], 6)); // [[1, 5], [2, 4]]

// 13. How would you chunk an array into groups of N elements?
// Example: [1,2,3,4,5,6], N = 2 → [[1,2], [3,4], [5,6]]
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6], 2)); // [[1,2], [3,4], [5,6]]

// 14. Explain what happens in this reduce expression:
// [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0)
const sum = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

// 15. What is the time complexity of Array.prototype.splice() in the worst case, and why?
// Worst-case: O(n)
// Because inserting/removing at the start causes all subsequent elements to shift
