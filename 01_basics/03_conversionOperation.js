let score = "33";
let score1 = "33abc";
let score2 = null;
let score3 = undefined;
let score4 = true;

console.log(typeof score);
console.log(typeof (score)); //same

console.log("\n");
let valueInNumber = Number(score);
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //33

console.log("\n");
let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1); //number
console.log(valueInNumber1); // Nan -> not a number

console.log("\n");
let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2); //number
console.log(valueInNumber2); // 0

console.log("\n");
let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3); //number
console.log(valueInNumber3); // Nan -> not a number

console.log("\n");
let valueInNumber4 = Number(score4);
console.log(typeof valueInNumber4); //number
console.log(valueInNumber4); // 1

//note:-
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;
let isLoggedIn1 = 0;
let isLoggedIn2 = "";
let isLoggedIn3 = "hitesh";

let booleanIsLoggedIn = Boolean(isLoggedIn);
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
let booleanIsLoggedIn3 = Boolean(isLoggedIn3);

console.table([booleanIsLoggedIn,booleanIsLoggedIn1,booleanIsLoggedIn2,booleanIsLoggedIn3]);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);