"use strict";

// Define a Person constructor function
const Person = function(firstName, birthYear){
    // Assign the firstName argument to the first_Name property of the new object
    this.first_Name = firstName;
    // Assign the birthYear argument to the birth_Year property of the new object
    this.birth_Year = birthYear;

}

const Ashiq = new Person("Ashiq", 2000);
console.log(Ashiq);

// 1. New{} is created
// 2. function is called, this ={}
// 3. {} linked to a prototype 
// 4. function automatically return {}

const Taher = new Person("Taher", 1998);
console.log(Taher);

const Rony  = new Person("Rony", 2000);
console.log(Rony);
