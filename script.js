// Console output
console.log('Hello, World!');

// Alert dialog
alert('This is an pet adoption page . Leave right now if you have no interest of adopting pets');

// Prompt for user input
let userInput = prompt('You must adopt a cute creature from here ! Say ur name so we can use it later 🤗 ');
console.log('User input:', userInput);

// Confirm dialog
let isConfirmed = confirm('sure?');
console.log('User confirmed:', isConfirmed);   

function performOperations() {
    // Math functions
    let randomNumber = Math.random(); // Random number between 0 and 1
    console.log('Random number:', randomNumber);
  
    let roundedNumber = Math.round(4.7); // Round to the nearest integer
    console.log('Rounded number:', roundedNumber);
  
    // String methods
    let greeting = 'Hello, World!';
    console.log('Length of the string:', greeting.length);
  
    let upperCaseGreeting = greeting.toUpperCase();
    console.log('Uppercase string:', upperCaseGreeting);
  
    let substring = greeting.substring(0, 5);
    console.log('Substring:', substring);
  
    // Array methods
    let fruits = ['apple', 'orange', 'banana'];
    fruits.push('grape'); // Add an element to the end
    console.log('Fruits array:', fruits);
  
    let removedFruit = fruits.pop(); // Remove the last element
    console.log('Removed fruit:', removedFruit);
  
    // Date object
    let currentDate = new Date();
    console.log('Current date:', currentDate);
  
    // Type checking
    let value = 42;
    console.log('Type of value:', typeof value);
  
    // String methods
    let sentence = 'JavaScript is a powerful scripting language.';
  
    let replacedSentence = sentence.replace('JavaScript', 'Python'); // Replace substring
    console.log('Replaced sentence:', replacedSentence);
  
    let splitWords = sentence.split(' '); // Split into an array of words
    console.log('Split words:', splitWords);
  
    let trimmedSentence = sentence.trim(); // Remove leading and trailing spaces
    console.log('Trimmed sentence:', trimmedSentence);
  
    // Additional array methods
    function manipulateArray() {
      // Split method
      let sentence = 'JavaScript is a powerful scripting language.';
      let splitWords = sentence.split(' ');
      console.log('Split words:', splitWords);
  
      // Array methods
      let fruits = ['apple', 'banana', 'orange'];
  
      // Push method
      fruits.push('grape');
      console.log('After push:', fruits);
  
      // Pop method
      let removedFruit = fruits.pop();
      console.log('After pop:', fruits);
      console.log('Removed fruit:', removedFruit);
  
      // Shift method
      let firstFruit = fruits.shift();
      console.log('After shift:', fruits);
      console.log('First fruit:', firstFruit);
  
      // Unshift method
      fruits.unshift('kiwi');
      console.log('After unshift:', fruits);
  
      // Concat method
      let moreFruits = ['pineapple', 'mango'];
      let combinedFruits = fruits.concat(moreFruits);
      console.log('Combined fruits:', combinedFruits);
  
      // Slice method
      let slicedFruits = combinedFruits.slice(1, 4);
      console.log('Sliced fruits:', slicedFruits);
  
      // Reverse method
      let reversedFruits = combinedFruits.reverse();
      console.log('Reversed fruits:', reversedFruits);
        
     //  length property
      let myArray = [1, 2, 3, 4, 5];
      let arrayLength = myArray.length;
      console.log("Array Length:", arrayLength); 

      // join method
      let fruits1 = ["apple", "orange", "banana", "grape"];
      let joinedFruits = fruits1.join(", "); 
      console.log("Joined Fruits:", joinedFruits); 
    }
  
    // Call the additional function
    manipulateArray();
  }
  
  // Call the main function
  performOperations();



//1:

// Function to check if a number is positive using promises :
function isPositiveNumber(num) {
  console.log("checking");
  return new Promise((resolve, reject) => {
    if (typeof num !== 'number' || num <= 0) {
      reject("Invalid input. ");
      return;
    }else{
       resolve(num);
    }
    console.log("checking2");
  });
}
// Example
const Mynum = 1;

const positiveNumberPromise = isPositiveNumber(Mynum);

positiveNumberPromise.then((num)=> {
    console.log("Positive number:", num);
  })
  .catch((error) => {
    console.log("pls provide a positive number",error);
  });


  //2.
      //Reversing each words in a sentence using promises

   // Example 
   const inputString = "Just a random sentence to work on";
  
   // Using the Promise
   reverseStringAsync(inputString)
     .then((reversedString) => {
       console.log("Promise resolved - Reversed String:", reversedString); // displayed after running promise function
     })
     .catch((error) => {
       console.log("Promise rejected -", error); // catching reject and displaying a output
     });


  function reverseStringAsync(inputString) {
    return new Promise((resolve, reject) => {

      // for reject
      const Rejectings = false;
  
      if (Rejectings) {
        reject("Promise rejected - Unable to reverse string");
      } else {
        
        const words = inputString.split(' '); //splits based on whitespace
  
        // Reverse each word in the array
        const reversedWords = words.map(function(word) {
          return word.split('').reverse().join(''); 
        });
  
        // Joining back
        const reversedString = reversedWords.join(' '); // jpining again with spaces
  
        resolve(reversedString);
        console.log("String reversed!",reversedString); //displays first becoz promise runs asynchronously
      }
    });
  }

// 1. filtering out duplicates without using set operator

  const array = [1, 2 , 1, 3, 2, 4];
  const uniqueValuesArray = array.filter((value, index) => {
      return array.indexOf(value) === index;
  });
  console.log(uniqueValuesArray);

  //note : 1. indexOf does not goes on duplicate values      2. index is same as for-loop i 
  //  index : 0(1) 1(2) 3(1) 4(3) 5(2) 5(4) ;
  // indexof: 0(1) 1(2)   -  4(3)   -  5(4) ;  !!takes only the first occurence of a value

  // 2. filtering out only the user name in json file using map function
  async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const users = await response.json();
        const usernames = users.map(user => user.username);
        console.log('Usernames:', usernames);
    } catch (error) {
        console.error(error.message);
    }
}
fetchData();
  
 
  
  
  
