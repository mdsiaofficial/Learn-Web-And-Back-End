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

