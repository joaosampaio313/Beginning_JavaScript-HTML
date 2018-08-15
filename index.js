// This is my first JavaScript code !


// Primitive tips
const interestRate = 4;
let name = "João";
let age = 19;
let isAprooved = true;
let firstName = undefined;
let selectedColor = null;

let person = {
      name: 'João',
      age : 19
};

// Dot notation
person.name = 'André';

let selection = 'name';

// Braket notation
person[selection] = 'João';

// Array literal
let selectedColors = ['red','blue'];

selectedColors[2] = 1;

// Functions

// Performing a task
function greet(name,lastName){
      console.log('Hello ' + name + ' ' + lastName);
}
greet('João','Sampaio');

// Calculating a value
function powTwo(number){
      return number * number;
}

let result = powTwo(2);

console.log(result);
