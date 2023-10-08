//function declaration
function add(a, b) {
    return a + b;
}

const sum = add(5, 3);
console.log(sum); // Output: 8

//Anonymous Function (Function Expression):
const square = function (x) {
    return x * x;
};
const result = square(4);
console.log(result); // Output: 16

//Arrow Function:
const cube = (x) => x * x * x;
const result1 = cube(3);
console.log(result1); // Output: 27

//Type Conversion:
const numAsString = "42";
const num = parseInt(numAsString); // Convert a string to an integer
const num2 = parseFloat("3.14"); // Convert a string to a floating-point number
const str = String(123); // Convert a number to a string

//Array Methods:
const numbers = [1, 2, 3, 4, 5];
const sums = numbers.reduce((acc, current) => acc + current, 0);
const filtered = numbers.filter((num) => num % 2 === 0);