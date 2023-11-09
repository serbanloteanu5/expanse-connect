/* 
  Filename: ComplexCode.js
  Content: Complex and elaborate JavaScript code demonstrating various concepts
*/

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  static canVote(age) {
    return age >= 18;
  }
}

// Class representing an Animal
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Animal sound!");
  }
}

// Class representing a Dog
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  makeSound() {
    console.log("Woof!");
  }
}

// Class representing a Cat
class Cat extends Animal {
  constructor(name, favoriteToy) {
    super(name);
    this.favoriteToy = favoriteToy;
  }

  makeSound() {
    console.log("Meow!");
  }
}

// Create Person, Dog, and Cat instances
const person = new Person("John Doe", 25);
const dog = new Dog("Buddy", "Labrador Retriever");
const cat = new Cat("Whiskers", "Feather toy");

// Output details of the instances
console.log(person.name); // Output: "John Doe"
console.log(dog.name); // Output: "Buddy"
console.log(cat.name); // Output: "Whiskers"

person.sayHello(); // Output: "Hello, my name is John Doe and I am 25 years old."
dog.makeSound(); // Output: "Woof!"
cat.makeSound(); // Output: "Meow!"

console.log(Person.canVote(person.age)); // Output: true

// Async function that simulates fetching data from an API
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
// ... continue with more code, functions, modules, etc. ...