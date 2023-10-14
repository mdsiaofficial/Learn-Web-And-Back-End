"use strict";

// problem

const temps = [3,-4,5,14,34,-5,'error',-10,'error',5,6,12,6,'error',25,40];
var min=temps[0];
var max=temps[0];
var weird=0;

function CalcTempAmplitude(temps){
    for(var i=0; i<temps.length; i++){
        if(typeof(temps[i])!=='string'){
            if(min>=temps[i]) min = temps[i];
            if(max<=temps[i]) max = temps[i];
        }else{
            weird++;
        }
    }
    console.log("Temperature amplitude: ",(max-min), "Error ", weird, "times");
} 

CalcTempAmplitude([3,32,5,5,-65,'error']);

var n=3;
if(n & 1) {
    console.log("ODD!");
} else {
    console.log("EVEN!");
}





const x=20;

if(x===20) console.log("twenty");
const calcAge= (birthYear)=> 2034 - birthYear;
console.log('');
console.log();
console.log("new");


console.log('');


// Problem 1: 
const calcTempAmp =  function (temps){
    let max = temps[0];
    let min = temps[0];
    for(let i=0; i<temps.length; i++){

        let NowTemp = temps[i];
        if(typeof NowTemp !=='number') continue;

        if (NowTemp > max) max = NowTemp;
        if (NowTemp < min) min = NowTemp;
    }
    console.log("Max" , max);
    console.log('Min' , min);

    console.log('Max:', max, 'Min:', min);
    return max-min; 
};
calcTempAmp([8,3,5,8,87,'error',6,5,'error',5,5,5,6]);
calcTempAmp([8, 3, 5, 8,'error',7, 6, 5,'error', 8, 98,5, 5, 6]);
calcTempAmp([8, 3, 5, 8,'error', 6, 5, 8, 9,'error', 5,,'error',6]);
let temp = [8, 3, 5, 8, 'error', 6, 5, 8, 9, 'error', 5, , 'error', 6];
let amplitude = calcTempAmp(temp);
console.log(amplitude);


// Problem 2: 
const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];
const arr3 = arr1.concat(arr2);
console.log('Merge', arr3);

arr3.push('g');
console.log('New Merge:', arr3);



