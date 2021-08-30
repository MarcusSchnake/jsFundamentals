/*
FUNCTIONS
*/

//General Ideas: at their broadest level, functions do the following:
//1) they take some input which the functions will handle/process
//2) they process the input given to them
//3) they usually, but not always, return some value
//4) they can be invoked (used) as many time as we want, cutting down on coding repetition

//example one:
function newFunc(num){
    return num + 1;
}

console.log(newFunc(7));
console.log(newFunc(10));
console.log(newFunc(11));
console.log(newFunc(-2));

//example two:
function sentence(firstName, lastName){ 
    return `My first name is ${firstName} and my last name is ${lastName}`;
}

console.log(sentence('Jonathan', 'Huer'));
console.log(sentence('Tyler', 'Shelton'));
let superImportantSentence = sentence('Nicky', 'Disborough');
console.log(superImportantSentence);

//lets build a function that takes a complext type-- an array in this case, and console.log each 
//item in the input array

let arr= [1, true, {key: 'string'},[0, false, null], 'heya!'];
let arr2=[5,6,7,8.9,10];

function iteratorFunc(inputArr){
    for (let element of inputArr){
        console.log(element);
    }
}
iteratorFunc(arr);
iteratorFunc(arr2);