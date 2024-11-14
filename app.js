// 1. Write a function `isEven` that takes a number as an argument and returns true if the number is even and false if it is odd.

function isEven(number){
    return number % 2 === 0
};
console.log(isEven(5));
console.log(isEven(4));
console.log(isEven(8));
console.log(isEven(13));

// 2. Create a function `countVowels` that takes a string and returns the number of vowels in that string.

function countVowels(str) {
    return(str.match(/[aeiou]/gi) || []).length;
  }
  
console.log(countVowels("javascript"));
console.log(countVowels("falak"));

// 3. Write a function `reverseString` that takes a string and returns it reversed (e.g., "hello" becomes "olleh").
function reverseString(str){
    return(str.split("").reverse().join(''))
}
console.log(reverseString("falak"));
console.log(reverseString('hello'));

// 4. Create a function `findMax` that takes an array of numbers and returns the largest number.
function findMax(arr){
    return Math.max(...arr);
}
console.log(findMax([2, 8, 9, 4]));

// 5. Write a function `isPalindrome` that checks if a given string is a palindrome (reads the same backward as forward).
function isPalindrome(str){
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("radar"));
console.log(isPalindrome('help'));

// 6. Create a function `fibonacci` that returns the nth Fibonacci number.
function fibonacci(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      let temp = a + b;
      a = b;
      b = temp;
    }
    return n === 0 ? 0 : b;
  }
  console.log(fibonacci(8));
  console.log(fibonacci(7));

//   7. Write a function `factorial` that calculates the factorial of a given number.
function factorial(n) {
    let result = 1;  // Initialize result as 1
    for (let i = 1; i <= n; i++) {
      result *= i;  // Multiply result by each number from 1 to n
    }
    return result;
  }
console.log(factorial(5));  
console.log(factorial(4));




  

