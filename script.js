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
    }
  
    // Call the additional function
    manipulateArray();
  }
  
  // Call the main function
  performOperations();
  
  