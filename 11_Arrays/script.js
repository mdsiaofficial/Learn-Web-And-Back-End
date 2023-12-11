let arr = ["a", "b", "c", "d", "e"];

// SLICE of array
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(2, -1));

// use spread
console.log(...arr);

// splice
console.log(arr.splice(2));
console.log(arr.splice(-1));

console.log(arr);
// splice deletes the taken items


// with arrays
var x = [2, 3, 4, 5, 6, 7, 8, 9];
var y = [2, 3, 4, 5, 6, 7, 8, 9];

y.reverse(); // [9, 8, 7, 6, 5, 4, 3, 2]
console.log(x.reverse());
console.log(y);
console.log(x.reverse());

console.log(x.concat(y));
console.log(x);
console.log(y);

console.log(...x, ...y);
var letterXY = x + y;
console.log(typeof letterXY); // String
// console.log(letterXY.join("-"));
// this cannot output. cause join method not works on Array

var letters = x.concat(y);
console.log(typeof letters); // Array/Object
console.log(letters.join("-"));


// new js in array

var newArr = [43, 23, 12];
console.log(newArr[0]);
console.log(newArr.at(0)); // new

console.log(newArr[newArr.length-1]);
