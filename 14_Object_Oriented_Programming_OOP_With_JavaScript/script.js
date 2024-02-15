"use strict";

// Define a Person constructor function
const Person = function(firstName, birthYear){
    // Assign the firstName argument to the first_Name property of the new object
    this.first_Name = firstName;
    // Assign the birthYear argument to the birth_Year property of the new object
    this.birth_Year = birthYear;

        // never do this.
    // this.calcAge = function(){
    //     const currentYear = new Date().getFullYear();
    //     return currentYear - this.birth_Year;
    //     // console.log(currentYear - this.birth_Year);
    // }
}

// Ashiq here is a instance of Person
const Ashiq = new Person("Ashiq", 2000);
console.log(Ashiq);
// Ashiq here is a instance of Person : True
console.log(Ashiq instanceof Person); 

// but here:
const Jannat = "Jannat";
// Jannat here is not a instance of Person : True
console.log(Jannat instanceof Person);

// 1. New{} is created
// 2. function is called, this ={}
// 3. {} linked to a prototype 
// 4. function automatically return {}

const Taher = new Person("Taher", 1998);
console.log(Taher);

const Rony  = new Person("Rony", 2000);
console.log(Rony);


// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function(){
    const currentYear = new Date().getFullYear();
    // return currentYear - this.birth_Year;
    console.log(currentYear - this.birth_Year);

}

Ashiq.calcAge();
Taher.calcAge();

console.log(Ashiq.__proto__);
console.log(Ashiq.__proto__ ===Person.prototype);

console.log(Person.prototype.isPrototypeOf(Ashiq));
console.log(Person.prototype.isPrototypeOf(Rony));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = "Homo Sapiens";
console.log(Ashiq.species);
