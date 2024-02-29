//Arrays - Examining Elements

/*const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];

let fourthItem  = horror [3];
console.log (fourthItem); */

// Adding Elements

/*

const  netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];

netflixShows [ netflixShows. length] = 'Crash landing on you';
console.log (netflixShows);

*/

//For Loops - Fundamentals 

/*

var countDown = 10;

for(let i=0; i<10; i++) 
countDown--; 
console.log(countDown);

*/

//For Loops and Arrays

/*
const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
for ( let i = 0; i < synonyms.length ; i++) {
  greetings.push ( 'Have a ' + synonyms[i]+ ' day!');
}
  console.log (greetings);


// 2. 
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
for (let i =0 ; i< greetings.length ; i++ ) {
  console.log (greetings[i]);
}

*/

//For Loops and Array Indices

/*
const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];




// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'

const bios = ["My name is Jon Snow and I am from The Wall", "My name is Arya Stark and I am from Winterfell", "My name is Jamie Lannister and I am from Kings Landing"];
console.log(bios);

*/

//For Loops - Calculating Array Elements

/*const increaseByTwo = [1, 2, 3, 4, 5];

// ADD CODE HERE

for (let i = 0; i < increaseByTwo.length; i++){ 

  increaseByTwo [i] +=2;     //increaseByTwo[i] += 2;

}

console.log(increaseByTwo);
*/

//While Loops - Fundamentals
/*
let count = 2;
while (count < 8) {
    count = count + 2;
}


// Uncomment these to check your work
console.log(count); 
*/

//While Loops - Conditional Expression

/*
let addThis = 0;
let sum = 0;
while (addThis < 10) { 
    sum += addThis
    addThis++
}

console.log(sum);
*/

//Control Flow - if statements
/*
const num = 40;
let final;
if (num > 100) {
  final = null;
  
} else   { 
  final = 2*num ;
console.log (final);
}
*/

//fizzbuzz

/*
let fb = [];
// for loop 16

for (let i = 1; i< 17; i++) {
    // divisible by 3 and 5 fizzbuzz
  if ( i% 3 === 0 && i % 5 === 0){
    fb.push ("fizzbuzz");
    //divisible by 3 - fizz 
      } else if (i % 3 === 0) {
                 fb.push ("fizz") ;
        //divisible by 5 -buzz
      } else if (i % 5 === 0) {
        fb.push ("buzz");
       }
  		else {
        fb.push (i);
      }
}

console.log (fb);

*/

//Control Flow and Iteration
/*
const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
for(let i = 0; i <= timesTenIfOverFive.length; i++){
	if (timesTenIfOverFive[i]>=5){
    timesTenIfOverFive[i]=timesTenIfOverFive [i]*10;
  } 
}

console.log(timesTenIfOverFive); 
*/

//Objects - Examining Properties
/*
const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  
  let found = 1;
  for (const foundNum in checkObj) {
    console.log (checkObj.foundnum);
  }
  */

  //Objects - Iterating with for... in
  /*
  const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  const objToArray = [];
  // ADD CODE HERE
  
  for (const property in checkObj) {
    if (checkObj[property] >= 2) {
      objToArray.push(checkObj[property])
    } 
  }
  console.log(objToArray);

  */

  //Objects - Iterating with a for loop
/*
  const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  let divBy6 = false;
  // ADD CODE HERE
  
  const objToArray = Object.values(checkObj);
  console.log(objToArray, `objToArray`);
  
  for (let i = 0; i < objToArray.length; i += 1) {
    if (objToArray[i]  % 6 === 0) {
      divBy6 = true;
    }
  }
  console.log(`divBy6 is ${divBy6}`);

  */

  //Objects - Nested Arrays
/*
  const nestedArr = [];
// ADD CODE HERE
for (let i = 0; i < 5; i += 1) {
  nestedArr.push([`loop${i}`, i]);
  console.log(nestedArr);
}
*/

//Objects - Adding Properties
/*
const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};
// ADD CODE HERE
for (let i = 0; i < possibleIterable.length; i += 1) {
  if (possibleIterable[i] % 3 === 0) {
  divByThree[possibleIterable[i]] = i;
    }
}
  console.log(divByThree);
*/

//Objects - Evaluating Keys
const sumMe = {
    hello: 'there',
    you: 8,
    are: 7,
    almost: '10',
    done: '!'
  };
  let total = 0;
  // ADD CODE HERE
  for (const property in sumMe) {
          if (typeof sumMe[property] === 'number') {
        total += sumMe[property];
      }
  }
  console.log(total);
