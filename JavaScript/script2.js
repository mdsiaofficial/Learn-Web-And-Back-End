"use strict";

// problem

const temps = [3,-4,5,14,34,-5,-10, 5,6,12,6,25,40];
var min=temps[0];
var max=temps[0];
for(var i=0; i<temps.length; i++){
    if(typeof(temps[i])!=='string'){
        if(min<=temps[i]) min = temps[i];
        if(max>=temps[i]) max = temps[i];
    }
    
}
console.log("Temperature amplitude: ", max-min);