// 🔁 1. Loop Basics
console.log("1. Loop Basics");

// a. For loop 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// b. While loop 10 to 1
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

// c. Do...while loop 1 to 5
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);


// 🔁 2. Even, Odd, Multiples
console.log("\n2. Even, Odd, Multiples");

// a. Even numbers 1 to 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) console.log(i);
}

// b. Odd numbers 20 to 50
for (let i = 20; i <= 50; i++) {
    if (i % 2 !== 0) console.log(i);
}

// c. Numbers divisible by 3 from 1 to 30
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) console.log(i);
}


// ➕ 3. Summation & Product
console.log("\n3. Summation & Product");

// a. Sum of 1 to 100
let sum1to100 = 0;
for (let i = 1; i <= 100; i++) {
    sum1to100 += i;
}
console.log("Sum 1 to 100:", sum1to100);

// b. Product of 1 to 10
let prod1to10 = 1;
for (let i = 1; i <= 10; i++) {
    prod1to10 *= i;
}
console.log("Product 1 to 10:", prod1to10);

// c. Sum of even numbers from 1 to 50
let evenSum = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) evenSum += i;
}
console.log("Sum of even numbers 1 to 50:", evenSum);

// d. Sum of squares 1² to 10²
let squareSum = 0;
for (let i = 1; i <= 10; i++) {
    squareSum += i * i;
}
console.log("Sum of squares 1–10:", squareSum);


// 🧠 4. Conditionals Inside Loops
console.log("\n4. Conditionals Inside Loops");

// a. Print 1 to 20 skipping multiples of 4
for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0) continue;
    console.log(i);
}

// b. Print 1 to 10, stop at 7
for (let i = 1; i <= 10; i++) {
    if (i === 7) break;
    console.log(i);
}

// c. Count numbers 1 to 100 divisible by 3 and 5
let countDiv3And5 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) countDiv3And5++;
}
console.log("Count divisible by 3 and 5 (1–100):", countDiv3And5);


// 🔂 5. Nested Loops (Without Patterns)
console.log("\n5. Nested Loops");

// a. All (i, j) where i and j from 1 to 3
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`(${i}, ${j})`);
    }
}

// b. (a, b) where a + b = 5 and 1 ≤ a, b ≤ 4
for (let a = 1; a <= 4; a++) {
    for (let b = 1; b <= 4; b++) {
        if (a + b === 5) {
            console.log(`a=${a}, b=${b}`);
        }
    }
}


// 🧮 6. Logic-Based Tasks
console.log("\n6. Logic-Based Tasks");

// a. Check if a number is prime
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log("Is 17 prime?", isPrime(17));
console.log("Is 20 prime?", isPrime(20));

// b. Factorial of a number
function factorial(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log("6! =", factorial(6));

// c. Reverse a number
function reverseNumber(n) {
    let rev = 0;
    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n = Math.floor(n / 10);
    }
    return rev;
}
console.log("Reverse of 123:", reverseNumber(123));

// d. Count digits in a number
function countDigits(n) {
    let count = 0;
    while (n > 0) {
        count++;
        n = Math.floor(n / 10);
    }
    return count;
}
console.log("Digits in 98245:", countDigits(98245));

// e. Check palindrome number
function isPalindrome(n) {
    return n === reverseNumber(n);
}
console.log("Is 121 palindrome?", isPalindrome(121));
console.log("Is 123 palindrome?", isPalindrome(123));
