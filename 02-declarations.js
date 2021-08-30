/* 
VARIABLES

1-grammarAndTypes
02-declarations.js
*/

//What is a variable
var a = 1;
var b = 2;
console.log(a + b);

//notes on naming variables:
//1) a variable must begin with a letter, underscore, or dollar sign
// numbers may follow the above characters, but cannot come first
// JaveScript is case sensitive-- 'hello' and 'Hello" are different variables

/* 
DECLARATIONS, INITIALIZATIONS, ASSINGNMENT
*/

/*
Declarations refer to when we 'declare' a variable

Initializations refer to wehn a variable is assigned a value 

Assignment refers to giving a veriable a value. This can be after initialization.
*/

var x;
console.log('Declaration 1:', x); //undefined

x = 10;
console.log('Initialization 1:',x); //10

X = 33;
console.log('Assingment 1:',x); //33

var y;
console.log(y);

y = 'hello';
console.log(y);

y = 'you are my fren';
console.log(y)

/*
Var, Let, and Const:

Var = 'old' keyword for variables
Let = 'new' keyword for variables (introduced with ES6)
const = also 'new', declares unchangable variables
*/

let tonight = 'great!';
const elevenFifty = 'Amazing!';
console.log(tonight, elevenFifty);

//elevenFifty = 'Super!';