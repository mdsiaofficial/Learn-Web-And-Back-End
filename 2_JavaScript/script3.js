'use strict';

/*
const name = "Ashiq";
const first = function(){
    let a=1;
    const b = second(7,4);
    a=a+b;
    return a;
}
function second(x,y){
    let c=3;
    return c;
}
const x = first();
console.log(x);

function calcAge(birthYear){
    let age = 2039-birthYear;
    function printAge(){
        const output = `Your age ${age}, born in ${birthYear}`;
        console.log(firstName,age, output);

        if(birthYear>=1981 && birthYear<=1996){
            var s = true;
            const firstName = "Lalu"
            const str = `Oh, you are a millenial, ${firstName}`;
            console.log(str);
            function add(a,b){
                return a+b;
            }
        }
        //console.log(str);
        console.log(s);    
        //console.log(add(4,5));
        //add(4,5);    
    }
    printAge();
    return age;
}
const firstName = "Ashiq";
calcAge(1992);
//printAge();

console.log(this);

const clage = function(birthYear){
    console.log(2037-birthYear);
    console.log(this);
}
clage(1996);

const clcage = birthYear => {
    console.log(2037-birthYear);
    console.log(this);
}
clcage(1996);

const ashiq = {
    year: 1999,
    calage: function(){
        console.log(this);
    },
}
ashiq.calage();

const mal = {
    year:2015
}
mal.calage = ashiq.calage;
mal.calage();

const g=ashiq.calage;
g();
*/



/*
var firstName = "Shoriful";

const ashiq = {
    firstName: "Ashiq",
    year: 2000,
    calcAge: function(){
        console.log(this);
        console.log(2023-this.year);
        console.log(this.firstName);

        // soln 1
        // const isMillenial = function(){
        //     console.log(self);
        //     console.log(self.year >=1995 && self.year<=2005);
        // };

        // soln 2
        const isMillenial=() => {
            console.log(this);
            console.log(this.year >=1995 && this.year<=2005);
            
        };


        isMillenial();
        
    },
    greet: function(){
        console.log(`Hey ${this.firstName}`)
    },

}
ashiq.greet();
ashiq.calcAge();
console.log(this.firstName);


// Arguments keyword
const addExpr = function(a,b){
    console.log(a,b);
    return a+b;
};

console.log(addExpr(4,8));

console.log(addExpr(3,5,7,9,3));

var addArrow = (a,b) => a+b;
console.log(addArrow(3,5));


*/

/*
let age = 23;
let oldAge = age;
age = 24;
console.log(age);
console.log(oldAge);

const me = {
    name: "Ashiq",
    age: 23,
};
const friend = me;
friend.age = 22;

console.log(me.name, me.age);
console.log(friend.name, friend.age);

me.age=23
console.log(me);
console.log(friend);

*/

/*

let st_profile_1={
    Name: 'Ashiq',
    Age: 24,
    Class: 'BSc',
}

let st_profile_2 = st_profile_1;
st_profile_2.Age = 22;

console.log("Profile 1:",st_profile_1);
console.log("Profile 2:",st_profile_2);
*/

// Primitive 
let lastName='Khatun';
let OldLastName=lastName;
lastName='Begum';
console.log(lastName,OldLastName);


// Ref
const Amena={

    firstName:'Amena',
    lastName:'Akter',
    Age:40,
};

const marriedAmena=Amena;
marriedAmena.lastName='Begum';
console.log("Before Marriage: ", Amena);
console.log("After Marriage: ", marriedAmena);

// Copy Obj
const Amm={
    firstName:'Amena',
    lastName:'Akter',
    Age:40,
    family: ['Father','Mother'],
};

const AmmCpy = Object.assign({}, Amm);
AmmCpy.lastName = "Begum";

console.log("Before Marriage: ", Amm);
console.log("After Marriage: ", AmmCpy);
AmmCpy.family.push('Ashiq');
AmmCpy.family.push('Jannat');


console.log("Before Marriage: ", Amm);
console.log("After Marriage: ", AmmCpy);
