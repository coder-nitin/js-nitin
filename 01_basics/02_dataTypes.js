"use strict"; //treat all JS code as newer version 

// alert(3+3); -> we are using nodejs, not browser

console.log(3 
    +
     3); // code readability should be high

console.log("Hitesh");

// data types
let name = "hitesh";
let age = 18;
let isLoggedIn = true;
let state;
let state1 = null;

/*

# primitive data types
    * number => 2 to power 53
    * bigint
    * string => "" or ''
    * boolean => true or false
    * null => standalone value
    * undefined
    * symbol => unique

# non-primitive data types
    * object

*/

console.log(typeof "hitesh");
console.log(typeof age);

console.log(typeof null); // op: object
console.log(typeof undefined); // undefined