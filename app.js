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

// 8. Create a function `removeDuplicates` that takes an array and returns a new array without duplicates.
 const removeDuplicates = (array) => [...new Set(array)];

 console.log(removeDuplicates([1,2,3,3,4,4,4,5,6,7,7,7]));

//  9. Write a function `sumArray` that takes an array of numbers and returns the sum.


 function sumArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]; 
  }
  return total;
}


const array = [1,8,9];
console.log(sumArray(array));

// 10. Create a function `sortArray` that takes an array of numbers and returns it sorted in ascending order.

function sortArray (numbers){
  return numbers.sort((a, b) => a - b)
}
const answer = [1,8,6,2,5]
console.log(sortArray(answer));

// 11. Write a function `stringLength` that returns the length of a given string.
function stringLength(Ilength){
  return Ilength.length;
}
const newLenght = "javascript";
console.log(stringLength(newLenght));

// 12. Create a function `toUpperCase` that takes a string and returns it in uppercase.

function toUpperCase(Icase){
  return Icase.toUpperCase();
}
const uppercase = "falak naaz";
console.log(toUpperCase(uppercase));

// 13. Write a function `capitalizeFirstLetter` that capitalizes the first letter of each word in a string.
function capitalizeFirstLetter(cLetter){
  return cLetter.split(' ').map(word => word[0].toUpperCase() +word.slice(1)).join(' ');
}
const str = "hello! what are you doing?";
console.log(capitalizeFirstLetter(str));

// 14. Create a function `mergeArrays` that takes two arrays and merges them into one.

function mergeArrays(array1,array2){
  return array1.concat(array2)
}
const arr1 = [1,2,3];
const arr2 = [4,5,6];
console.log(mergeArrays(arr1,arr2));

// 15. Write a function `isPrime` that checks if a number is prime.
function isPrime(num){
  if(num <= 1)return false;
  for(let i = 2; i * i <= num; i++){
    if(num % i === 0)return false
  }
  return true;

}
console.log(isPrime(5));
console.log((isPrime(8)));

  

