/* 
SCOPE

1-grammarAndTypes
03-scope.js
*/

/*
What is scope?

JS has both LOCAL and GLOBAL scope
*/

//example 1
var x = 12;//global score

function scope() { //local scope, var only exist in the scope
    var x = 33;
    var y = 10;
    console.log(x);
}
scope();//logs 33
//console.log(y); = not defined needs to be scope call
console.log(x);//logs 12

//example 2
var x = 12;

function scope() {
    x = 33;
    console.log(x);
}

scope() //33
console.log(x);//33

//example 3:
var x = 1;//thrid console log 1

function scope() {
    var x = 2;//second console logs 2
    function scopeInner(){
        var x = 3;
        console.log(x); //first console logs 3
    }
    scopeInner();
    console.log(x);
}
scope();
console.log(x);

//example 4 constrasts with 5:
var x = 12;

function scope(){
    var x = 33;
    if (true){
        let x =45;
        console.log(x); // 1st console log 45
    }
    console.log(x);//2nd console log 33
}

scope();
console.log(x);// 3rd console log 12

//example 5 contrasts with 4:
var x = 12;

function scope(){
    var x = 33;
    if (true){
        var x = 45;
        console.log(x); //1st console.log 45
    }
    console.log(x);// 2nd 45 -> var does not obey "block" scope, var only cares if with function
}

scope();
console.log(x);// 3rd console.log