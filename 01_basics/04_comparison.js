console.log( 2 > 1 );
console.log( 2 >= 1 );
console.log( 2 < 1 );
console.log( 2 == 1 );
console.log( 2 != 1 );

console.log( "2" > 1 );
console.log( "02" > 1 );
// always remember when we are doing comparison of values then the data types of all the values should be same

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// == and <,>,<=,>= works differently
//avoid this kind of conversions

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
//avoid this kind of conversions

//strict check (===):- checks both data type and value
console.log("2" == 2);
console.log("2" === 2); //strict check