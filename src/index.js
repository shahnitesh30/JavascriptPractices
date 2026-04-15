import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>

  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// FIZZBUZZ
// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     let output = "";
//     if (i % 3 === 0) output += "Fizz";
//     if (i % 5 === 0) output += "Buzz";
//     console.log(output || i);
//   }
// }
// fizzBuzz(15);

//PALINDROME CHECK
// function isPalindromeCheck(str) {
//   const edited = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   return edited === edited.split("").reverse().join("");
// }
// console.log("Palindrome 1:", isPalindromeCheck("madam"));
// console.log(
//   "Palindrome 2:",
//   isPalindromeCheck("A man, a plan, a canal: Panama")
// );

//FIND MAX IN ARRAY
// function findMax(arr) {
//   return Math.max(...arr);
// }
// console.log("Max element in array",findMax(["4", "8", "3", "15", "1"]));

//ANAGRAM CHECK
// function isAnagramCheck(a, b) {
//   const sort = (str) => str.split("").sort().join("");
//   return sort(a) === sort(b);
// }
// console.log("Anagram Check: ", isAnagramCheck("throw", "worth"));

//CHECK FIRST UNIQUE CHARACTER
// function checkFirstUniqueCharac(str) {
//   let map = {};
//   for (let char of str) map[char] = (map[char] || 0) + 1;

//   for (let char of str) {
//     if (map[char] === 1) {
//       return char;
//     }
//   }
//   return null
// }
// console.log("Check first unique character:", checkFirstUniqueCharac("swiss"));

//MEMOIZATION
// function memoize(fn) {
//   const cache = {};
//   return function (n) {
//     if (cache[n]) return cache[n];
//     return (cache[n] = fn(n));
//   };
// }

// const slowSquare = (n) => {
//   return n * n;
// };

// const fastSquare = memoize(slowSquare);

// console.log("Memoize function eg1:", fastSquare(29));
// console.log("Memoize function eg2:", fastSquare(29));

//DEBOUNCING
// function debounce(func, delay) {
//   let timeout;
//   return function (...args) {
//     clearTimeout(timeout);

//     timeout = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }

// const handleSearch = debounce(function (value) {
//   console.log("API call with:", value);
// }, 2000);

// handleSearch("Testinggg1234");
