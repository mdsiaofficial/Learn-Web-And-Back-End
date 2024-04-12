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
// 2. function is called, this = {}
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

console.log(Ashiq.hasOwnProperty("firstName")); // false
console.log(Ashiq.hasOwnProperty("first_Name")); // true
console.log(Ashiq.hasOwnProperty("species")); // false



console.log(Ashiq.__proto__);
console.log(Ashiq.__proto__.__proto__);
console.log(Ashiq.__proto__.__proto__.__proto__);


console.log(Person.prototype.constructor);


const arr =[2,3,3,4,5,5,6,46,7,35,4,23];
console.log(arr.__proto__);
console.log(arr.sort((a,b) => a-b));
console.log(arr.__proto__ === Array.__proto__);

console.log(arr.__proto__.__proto__);
Array.prototype.unique = function(){
    return [...new Set(this)];
};

console.log(arr.unique());


const h1 = document.querySelector("h1");


// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car.
A car has a make and a speed property. The speed
property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will
increase the car's speed by 10, and log the new speed
to the console;
3. Implement a 'brake' method that will decrease the
car's speed by 5, and log the new speed to the
console;
4. Create 2 car objects and experiment with calling
'accelerate' and 'brake' multiple times on each of
them.


'BMW' going at a 120 km/h
CAR 1:
'Mercedes' going at 95 km/h
CAR 2.
*/


const Car = function(make, speed){
    this.mk = make;
    this.spd = speed;

    this.accelarate = function(){
        this.spd +=10;
        console.log(this.spd);
        
    };

    this.brk = function(){
        this.spd -=5;
        console.log(this.spd);
        
    };
};

const BMW = new Car("BMW", 120);
const Mercedes = new Car("Mercedes", 95);

BMW.accelarate();
BMW.accelarate();
BMW.brk();
BMW.brk();
BMW.accelarate();
BMW.brk();

Mercedes.accelarate();
Mercedes.accelarate();
Mercedes.accelarate();
Mercedes.brk();
Mercedes.brk();
Mercedes.brk();



// Class expression

// class declaration

class PersonClass {
    constructor(firstName, birthYear){

        this.fName = firstName;
        this.bYear = birthYear;
    };


        // here methods will be added to .prototype property...
    calcAge(){
        const current = new Date().getFullYear();
        console.log(current - this.bYear);
        
    }

    set fullName(name){
        console.log(name);
        if(name.includes(" ")){
            this.full_Name = name;

        }else{
            alert(`${name} is not a full name!`);
        }
    }

    get fullName(){
        return this.full_Name;
    }

    static hi(){
        console.log(`Hi, Whats up?`);
        
    }
};

const AshiqChester = new PersonClass("Ashiq Chester", 2000);
console.log(AshiqChester);
console.log(AshiqChester.__proto__);

PersonClass.prototype.greetings = function(){
    console.log(`Hey Wassup!!! ${this.fName}`);
    
};

AshiqChester.greetings();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode 


const account = {
    owner: "Ashiq",
    movements: [65, 23, 12,52],

    get latest(){
        return this.movements.slice(1);
    },
    
    set latest(move){
        this.movements.push(move);
    },

    set fullName(name){
        if(name.includes(" "));
    }
};


console.log(account.latest);
console.log(account.movements);
account.latest = 98;
console.log(account.movements);
console.log(account);
// console.log(account.age(10));



const Kabir = new PersonClass("Kabir Hossen", 1979);
console.log(Kabir);
console.log(Kabir.fullName);

const Anika = new PersonClass("Anika Tahsin Jannat", 2009);
console.log(Number.parseFloat("1234.34 kg"));

PersonClass.hi = function(){
    console.log('Hi, whats up.');
}

PersonClass.hi();
// Kabir.hi(); // error

const PersonPrototype = {
    calcAge(){
        console.log(2024- this.birthYear);
        
    },

}


const chester = Object.create(PersonPrototype);

console.log(chester);
chester.name = "Chester";
chester.birthYear = 2000;
chester.calcAge();