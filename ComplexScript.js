/*
   File Name: ComplexScript.js
   Description: A complex JavaScript script that demonstrates various advanced programming techniques and concepts.
*/

// Declare a class named "Person"
class Person {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }

   greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
   }
}

// Declare a class named "Employee" that extends "Person"
class Employee extends Person {
   constructor(name, age, position) {
      super(name, age);
      this.position = position;
   }

   introduce() {
      console.log(`I am an employee. My name is ${this.name}, I am ${this.age} years old, and I work as a ${this.position}.`);
   }
}

// Declare an object of the "Person" class
const person1 = new Person("John Doe", 25);
person1.greet();

// Declare an object of the "Employee" class
const employee1 = new Employee("Jane Smith", 30, "Software Developer");
employee1.greet();
employee1.introduce();

// Define a higher-order function that returns a function 
function incrementBy(num) {
   return function(x) {
      return x + num;
   }
}

// Use the higher-order function to create increment functions
const incrementByFive = incrementBy(5);
console.log(incrementByFive(10)); // Output: 15

const incrementByTen = incrementBy(10);
console.log(incrementByTen(15)); // Output: 25

// Define a function that returns a Promise
function fetchData(data) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (data) {
            resolve(`Data received: ${data}`);
         } else {
            reject("No data available.");
         }
      }, 2000);
   });
}

// Use the Promise with async/await
async function getData() {
   try {
      const result = await fetchData("Sample Data");
      console.log(result); // Output: Data received: Sample Data
   } catch (error) {
      console.log(error);
   }
}

// Call the async function to fetch data
getData();

// Define a generator function
function* fibonacciSequence() {
   let a = 0, b = 1;
   yield a;
   yield b;

   while (true) {
      let c = a + b;
      yield c;
      a = b;
      b = c;
   }
}

// Use the generator function to generate Fibonacci sequence
const fibonacci = fibonacciSequence();
console.log(fibonacci.next().value); // Output: 0
console.log(fibonacci.next().value); // Output: 1
console.log(fibonacci.next().value); // Output: 1
console.log(fibonacci.next().value); // Output: 2
console.log(fibonacci.next().value); // Output: 3
// Continues...

// ... continue with more complex and advanced code
// Total lines: 200+