/*
COMPARISION OPERATORS

5-expressionsAndOperators
02-comparisionOperators.js
*/

//equality comparision operator
console.log('3' == 3);
console.log(4 == 4);
console.log(3 == '4');

//strict equality comparison operator
console.log(3 === 3);
console.log('3' === 3);

//not equal comparison operator
console.log('3' != 4);
console.log('3' != 3);

//strict not equal comparison operator
console.log('3' !== 3);
console.log(3 !== 3);

//greater than
console.log(3 > 2);
console.log(2 > 3);

//less than
console.log(2 < 3);
console.log(3 < 2);

//greater than or equal to
console.log(3 >= 2);
console.log(3 >= 3);

//less than or equal to 
console.log(2 <= 3);
console.log(3 <= 2);

//And (both expressions on either side of the operator must be true for 'And' to return true)
console.log(1<2 && 3>0);
console.log(2<1 && 3>0);

//Or (either expression on one side of the operator must be true for 'Or' to return true)
console.log(1<2 || 3<0);
console.log(2<1 || 3<0);

let obj = {key: 'test'};
console.log(obj == {key: 'test'});

console.log(obj == obj);

let arr = [1,2,3,4];
console.log(arr == [1,2,3,4]);
console.log(arr == arr);





















let happyDude = 10

//Equal
console.log(happyDude == 10);
//Not Equal
console.log('happyDude' != 5);
//Strict Equal
console.log("happyDude" === 5);
//Strict Not Equal
console.log(happyDude !== 1);
//Greater than
console.log(happyDude > 4);
//Greater than or equal 
console.log(happyDude >= 12);
// Less than or equal
console.log(happyDude <= 8);
//AND true is value/condition of A is same as value/ condition of B
console.log(happyDude && 20);
// OR returns true if value/condition A OR value/condition B are true
console.log(happyDude || 10);



