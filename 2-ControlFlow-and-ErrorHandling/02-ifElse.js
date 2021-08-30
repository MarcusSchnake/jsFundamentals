//IF ELSE
let weather = 75;

if (weather < 70) {
    console.log('wear a jacket');
} else {
    console.log('No jacket necessary!')
}

//you can blend complex conditionals and if-else statements based upon you need:
if (weather > 70 && typeof weather === 'number'){
    console.log('This weather is amazing!');
} else {
    console.log('Either the temperature is cool, the variable is not a string, or both');
}
// if you change the temp to a string and not a number you get else result


















//If Else examples
let elevatorUp = true;
let elevatorDown = true;
let elevatorBroken = false;
let elevatorStuckWileWeAreOnIt = false;
let elevatorNumber = 13;

if (elevatorUp === true) {
    console.log("Going Up!");
}
else {
    console.log("Going down")
}

if (elevatorBroken) {
    console.log("Bummer! Let's take the stairs.");
}
else {
    console.log("Which floor?");
}

if (elevatorStuckWileWeAreOnIt) {
    console.log("Oh no! We're stuck!");
} else {
    console.log("This elevator is fast!");
}

let elevatorUp = true;
let elevatorDown = true;
let elevatorBroken = true;
let elevatorStuckWileWeAreOnIt = true;
let elevatorNumber = 13;

if (elevatorBroken && elevatorDown) {
    console.log("I hope this thing doesn't start flying down!");
} else {
    console.log("How long are you in town for?");
}

if (elevatorBroken || elevatorStuckWileWeAreOnIt) {
    console.log("Hi Bob, this is Bob with maintenance. How can I help you?");
}

if (elevatorNumber === 13 && elevatorStuckWileWeAreOnIt) {
    console.log("This is not our lucky day!");
}
//1) Challenge 
let bigBone =  true;
let longWalk = true;
let playingFetch = true;

if (longWalk + bigBone + playingFetch) {
    console.log("This dog is spoiled rotten!")
} else {
    console.log("This dog owner sucks!")
}


//2) bank bad code challenge
//bankAccount has no value
let bankAccount = 8000;
let debt = 4200;
let difference = bankAccount - debt;

if (bankAccount - debt > 700) {
    console.log("I have some extra money. I should pay off my debt. I'll have $" + difference +" leftover.");
} else {
    console.log("It probably isn't a good time to pay off my debt")
}

