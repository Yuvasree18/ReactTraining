//function declaration
function add(a, b) {
    return a + b;
}

const sumss = add(5, 3);
console.log(sumss); // Output: 8

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
const numberss = [1, 2, 3, 4, 5];
const sums = numberss.reduce((acc, current) => acc + current, 0);
const filtered = numberss.filter((num) => num % 2 === 0);

const addArrows = (a, b) => a + b;
console.log(addArrows(5, 3)); // Output: 8

function add(x, y) {
  return x + y;
}


//if-else
const score = 75;

if (score >= 90) {
  console.log("You got an A!");
} else if (score >= 80) {
  console.log("You got a B.");
} else if (score >= 70) {
  console.log("You got a C.");
} else if (score >= 60) {
  console.log("You got a D.");
} else {
  console.log("You failed the exam.");
}



//switch
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the workweek.");
    break;
  case "Tuesday":
    console.log("Tuesday is another workday.");
    break;
  case "Wednesday":
    console.log("We're halfway through the week.");
    break;
  case "Thursday":
    console.log("Thursday is almost there!");
    break;
  case "Friday":
    console.log("TGIF - It's the end of the workweek!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend, time to relax.");
    break;
  default:
    console.log("Invalid day.");
}


