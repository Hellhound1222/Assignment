// STRING QUESTIONS

// 1. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}
// Example: reverseString("hello") → "olleh"

// 2. Check Palindrome (case-insensitive)
function isPalindrome(str) {
    let cleaned = str.toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}
// Example: isPalindrome("Madam") → true

// 3. Count Vowels
function countVowels(str) {
    const vowels = 'aeiou';
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
// Example: countVowels("JavaScript") → 3

// 4. Capitalize First Letter of Each Word
function capitalizeWords(str) {
    return str.split(' ').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}
// Example: capitalizeWords("hello world") → "Hello World"

// 5. Character Frequency
function charFrequency(str) {
    const freq = {};
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}
// Example: charFrequency("aabbbc") → { a: 2, b: 3, c: 1 }


// ----------------------
// ARRAY QUESTIONS
// ----------------------

// 1. Remove Duplicates
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
// Example: removeDuplicates([1, 2, 2, 3, 4, 4]) → [1, 2, 3, 4]

// 2. Flatten an Array (1 level deep)
function flattenArray(arr) {
    return [].concat(...arr);
}
// Example: flattenArray([[1, 2], [3, 4], [5]]) → [1, 2, 3, 4, 5]

// 3. Find Max and Min
function findMaxMin(arr) {
    return {
        max: Math.max(...arr),
        min: Math.min(...arr)
    };
}
// Example: findMaxMin([4, 1, 9, -2]) → { max: 9, min: -2 }

// 4. Sum of Even Numbers
function sumEven(arr) {
    return arr.filter(n => n % 2 === 0).reduce((sum, val) => sum + val, 0);
}
// Example: sumEven([1, 2, 3, 4, 5, 6]) → 12

// 5. Group by Type
function groupByType(arr) {
    const result = {};
    for (let item of arr) {
        const type = typeof item;
        if (!result[type]) {
            result[type] = [];
        }
        result[type].push(item);
    }
    return result;
}
// Example: groupByType([1, 'a', true, 2, 'b']) → { number: [1, 2], string: ['a', 'b'], boolean: [true] }
