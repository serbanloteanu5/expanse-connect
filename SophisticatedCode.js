/* 
   File Name: SophisticatedCode.js
   Description: This file contains a sophisticated code example that manipulates and analyzes data.
*/

// Create a class to represent a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getBio() {
    return `${this.name} is ${this.age} years old.`;
  }

  static compareAges(person1, person2) {
    if (person1.age > person2.age) {
      return `${person1.name} is older than ${person2.name}.`;
    } else if (person1.age < person2.age) {
      return `${person1.name} is younger than ${person2.name}.`;
    } else {
      return `${person1.name} and ${person2.name} are the same age.`;
    }
  }
}

// Create an array of Person objects
const people = [
  new Person("Alice", 25),
  new Person("Bob", 30),
  new Person("Charlie", 28),
  new Person("Diana", 32),
  new Person("Eric", 27),
];

// Filter people older than 27
const olderThan27 = people.filter((person) => person.age > 27);

// Map people's names to uppercase
const namesUpperCase = people.map((person) => person.name.toUpperCase());

// Get the total age of all people
const totalAge = people.reduce((total, person) => total + person.age, 0);

// Find the person with the highest age
const maxAgePerson = people.reduce(
  (personWithMaxAge, person) =>
    person.age > personWithMaxAge.age ? person : personWithMaxAge,
  new Person("", 0)
);

// Sort people by age in descending order
const sortedByAgeDescending = people.sort((a, b) => b.age - a.age);

// Print information
console.log("People older than 27:", olderThan27);
console.log("Names in uppercase:", namesUpperCase);
console.log("Total age of all people:", totalAge);
console.log("Person with the highest age:", maxAgePerson);
console.log("People sorted by age descending:", sortedByAgeDescending);

// Compare ages of two people
const person1 = new Person("Frank", 35);
const person2 = new Person("George", 38);
console.log(Person.compareAges(person1, person2));

// Additional complex code...
// ... (200+ lines of code)