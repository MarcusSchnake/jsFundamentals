// ELSE IF - video

//if-elseif statements can be chained

let age = 30

if (age >= 25) {
    console.log('yay! you can rent a car!');
} else if (age >= 21){
    console.log('Yay! You can drink!');
}else if (age >= 18) {
    console.log('Yay! You can vote!');
} else {
    console.log('Sorry, you are too young to do anything fun');
}





//module

let agePerson = 16;
if (agePerson >= 25 ) {
    console.log("If a person is over 25, they can rent a car.");
}
if (agePerson >= 21 && agePerson < 25) {
    console.log("They can have a beer.");
} 
if (agePerson >= 18 && agePerson < 21) {
    console.log("They can vote.");
} 

if (agePerson < 18 && agePerson >1) { 
    console.log("Enjoy being a kid!!");
}