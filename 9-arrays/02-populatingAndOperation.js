/*
ARRAYS
*/

//what is an array?
//has [] brackets
//can hold multiple datatypes
//arrays can list datatypes in an order, aka numbered way see hidden key below

// let students =['Toney', 'Marshall', 'Rhys', 'Ray', 23, true,['Ryan', 'Iesha']];
// //hidden key:   0           1         2     3       4   5       6/0     7/1
//   console.log(typeof students);// typeof doesn't tells me variable is an array -> object
//   console.log(students instanceof Array);//instanceof tells me my array is an array
//   console.log(students[2]);
//   console.log(students[1]);
//   console.log(students[6]);

// let name = students[6][1];//calls to an array in the array
// console.log(name);
// console.log(`Hello ${name}, you look nice today.`);

//recall for of loop
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

// for (f of food){
//     console.log(f + 'is amazing!');
// }

// //array methods
// food.push('Pizza');//added to the end of our array
// console.log(food);
// food.splice(1, 1,'Bananas');
// console.log(food);
// food.splice(2, 0, 'Sweet Potato Pie');// asks for an insert point, how many thing to remove, then
// //the item or items to add
// console.log(food);
// food.pop();// removes the last element of an array
// console.log(food);

// food = food.slice(2,4);//the first number is the first element to slcie from the array, while the 
// //second number is the stop postion (not to be included) renders [ 'Quesadilla', 'Cheese Cake' ] starts at position 2 and stops at postion 4
// console.log(food);

//forEach allows us to iterate with loops specifically, and we can directly grab both elements
//and their index

// food.forEach((f) => console.log(f));


// food.forEach((food, index) => {
//  console.log(`The ${food} food in our array is at postion ${index}`);
// })

let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Watchman', 'The Sound of Music'];

movies.push('The Force Awakens'); //adds The Force Awakens to the end
console.log(movies);
movies.splice(3, 1, 'The League of Extraordinary Gentlemen');// cuts out the third element and replaces it with the new string
//Slice and Splice, Slice Splice takes two thing and merges them together, Slice grabs part of the array and removes them
console.log(movies);
movies.forEach(movie => console.log(movie));
console.log(movies.length);

//let do the following with an array:
//we will check if we are working with an array
//flip the values within the array (what was in index 4 is now in 0,3,to 1 etc.)
//using a method only, let's print the values of the newly arranged array

let arr = new Array(1,2,3,4,5);

if (arr instanceof Array){
  let revArr = arr.reverse();
  revArr.forEach(numbers => console.log(numbers))
}