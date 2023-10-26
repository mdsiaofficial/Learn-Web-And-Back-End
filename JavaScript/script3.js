'use strict';

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