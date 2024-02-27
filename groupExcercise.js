
/*
//1. reverse: switches order from first-last to last-first
let names = ["John", "Abigail", "Jerome", "Cynthia"];
names.reverse();
console.log(names);
//answer: [ 'Cynthia', 'Jerome', 'Abigail', 'John' ]
//2. sort: puts the items in order; alphabetically or numerically
names.sort();
console.log(names);
//answer: [ 'Abigail', 'Cynthia', 'Jerome', 'John' ]
//3. forEach: this method calls a function for each element in an array.
//instead of everthing being in a string, every element in the array is separated in a list.
names.forEach((name) => {
    console.log(name);
})
//answer:
// Abigail
// Cynthia
// Jerome
// John 




*/

// class-group practice SPLICE
// const fruits = ["Banana", "Apple", "Mango"];
// //const citrus = fruits.slice(1, 3);
// //console.log(citrus);
// fruits.splice(2, 0, "Grapefruit", "Lime");
// console.log(fruits);
// //2nd example with splice
// const animals = ["Bear","Cat", "Lion", "Panda"];
// const feline = animals.slice(1, 3);
// // console.log(feline);
// animals.splice(3, 0, "Eagle", "Owl");
// console.log(animals);
// lastindexOf() string
/*
let text = "Hello planet earth, you are a great planet.";
let result = text.lastIndexOf("planet", 20);
//console.log(result); //ask christina
//document.getElementById("demo").innerHTML = result;
//lastindexOf() array
const fruits = ["Apple", "Orange", "Apple", "Mango", "Mango"];
let index = fruits.lastIndexOf("Apple");
console.log(index);
*/




/*
//unshift()
const names = ['Pritee', 'Dee', 'Tori', 'Dani', 'Sumia', 'Tori'];
// console.log(array);
// console.log(array.unshift("Sumia"));
// console.log(array);
//b. shift()
// const array1 = array.shift();
// console.log(array);
// console.log(array1);
//c. indexOf()
//definition: the indexOf() method of Array instances returns the first index at which
// a given element can be found in the array, or -1 if it is not present.
console.log(names.indexOf('Tori'));
//expected output - 2
console.log(names.indexOf('Tori', 3));
// cannot be run at the index of the item you're searching for
console.log(names.indexOf('Ahja'));
//item not included, should return output of -1
*/




/*
const fruits  = [ 'Mango' , 'Kiwi' , 'Apple', 'Strawberry' ,' Grapes' , 'Blueberry'];
console.log(fruits);
const fruits1 = fruits.push ('Banana' , 'Oranges');
console.log(fruits1);
console.log (fruits);
//to remove last element of array
const veggies = ['Spinach', 'tomato', 'potato' , 'carrot'];
// let veggies1 = veggies.pop ();
// console.log(veggies1);
let veggies2 = ['Radish' ,' cabbage', 'beet'] ;
console.log(veggies);
 veggies3 = veggies2.join ( '***' ) ;
console.log(veggies3);
// console.log(veggies3);
// console.log(veggies2);
//at method - takes integer value and returns the item at that index,
// allowing for positive and negative integers.
//  Negative integers count back from the last item in the array.
let index = fruits [3];
let fruits2 = fruits.at ( 5);
// let fruits2 = fruits.at ( 4);
// let fruits2 = fruits.at ( 7);
// console.log(fruits2);

*/