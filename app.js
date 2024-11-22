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

// 16. Create a function `countWords` that counts the number of words in a string.
function countWords(Istring){
  return Istring.trim().split(/\s+/).length
}
console.log(countWords("we are learning javascript"));
console.log((countWords("I am full stack developer")));

// 17. Write a function `arrayContains` that checks if an array contains a specific value.
function arrayContains(arr,value){
  return arr.includes(value)
}
console.log(arrayContains([1,2,3,4],5));
console.log(arrayContains([2,4,8],8));

// 18. Create a function `uniqueElements` that returns an array of unique elements from a given array.
function uniqueElements(arr) {
  return [...new Set(arr)];
}

const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = uniqueElements(arr);
console.log(uniqueArray); 

// 19. Write a function `flattenArray` that flattens a nested array.
function flattenArray(arr) {
  return arr.flat(Infinity);
}

const nestedArray = [1, [2, [3, 4], 5], [6, 7], 8];
const flatArray = flattenArray(nestedArray);
console.log(flatArray); 

// 20. Create a function `repeatString` that takes a string and a number, and returns the string repeated that many times.

function repeatString(str, num) {
  return num > 0 ? str.repeat(num) : "";
}


console.log(repeatString("falak", 3)); 
console.log(repeatString("java", 1)); 

// 21. Write a function `getRandomInt` that returns a random integer between two numbers.
function getRandomInt(min, max) {
  min = Math.ceil(min); 
  max = Math.floor(max); 
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log(getRandomInt(1, 10)); 
console.log(getRandomInt(5, 15));

// 22. Create a function `average` that calculates the average of an array of numbers.
function average(arr) {
  if (arr.length === 0) return 0; 
  const sum = arr.reduce((count, num) => count + num, 0); 
  return sum / arr.length; 
}
console.log(average([1, 2, 3,])); 
console.log(average([10, 20,]));    
console.log(average([]));  

// 23. Write a function `removeSpaces` that removes all spaces from a string.
function removeSpaces(str) {
  return str.split(" ").join("");
}

console.log(removeSpaces("Hello World"));        
console.log(removeSpaces("  java  script "));  
console.log(removeSpaces(" No Spaces Here ")); 

// 24. Create a function `difference` that returns the difference between the largest and smallest numbers in an array.
function difference(arr) {
  if (arr.length === 0) return 0; 
  const max = Math.max(...arr);  
  const min = Math.min(...arr);  
  return max - min; 
}
console.log(difference([10, 2, 5, 8, 20])); 
console.log(difference([1, 1, 1, 1])); 

// 25. Write a function `shuffledArray` that takes an array and returns it shuffled randomly.
function shuffledArray(arr) {
  return arr
    .map(value => ({ value, sort: Math.random() })) 
    .sort((a, b) => a.sort - b.sort)   
    .map(({ value }) => value);         
}

const Adjust = [5,4,3,2,1];
console.log(shuffledArray(Adjust)); 
















  

