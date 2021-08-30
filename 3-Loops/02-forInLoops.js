/*
FOR IN LOOPS
*/

// of requires that your 'thing' you're looping through be iterable--that means it needs
//to be number

let student = {name: 'Peter', awesome: true, degree: 'javascript', week: 1};

for (item in student){
    console.log(item);
    console.log(student[item]);
}

let catArray = ['tabby', 'british shorthair','burmese','main coon', 'rag doll'];

for (cat in catArray){ 
    console.log(cat);
    console.log(catArray[cat]);
}

let instructor = 'pAUL';
let capName;

for (n in instructor){
    if (n == 0){
        capName = instructor[n].toUpperCase();
    }else {
        capName += instructor[n].toLowerCase();
    }
}
console.log(capName);