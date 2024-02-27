
// let name1 = "John";
// let name2 = "Abigail";
// let name3 = "Jerome";
// // ..we do this to all students in class
// let name30 = "Cynthia";

// let greeting1 = "Hello, " + name1 + "!" ;
// //  do this for all 30 students

// let greeting30 = "Hello, " + name30 + "!" ;

// console.log ( greeting1);

// const names = ["John", "Abigail" , "Jerome" , "Cynthia"];

// const greetings = [];

// console.log("names array looks like this:");
// console.log(names) ;

// for (let i = 0 ; i < names.length ; i++) {
//     console.log (i);
//     greetings[i] = "Hello, " + names [i] + "!";
//     console.log(greetings[i]);
// }


// let movie1 = 'Swadesh ';
// let movie2 = 'BangloreDays';
// let movie3 = 'Baby,s day out';

// const  movies = [movie1, movie2, movie3];
// console.log (movies) ;

// let firstMovie = movies[0];
// console.log(firstMovie);
// console.log(movies.length);
// movies[1] = "Taken 2";
// console.log(movies);
// movies[movies.length] = 'THE TERMINAL';
// console.log(movies);
// console.log(movies[5]);


// for (let i=0; i< movies.length; i++) {
//     console.log("I am in the for loop and i is:", i)
//     console.log(movies[i]);
// }

// //======================
//  //BUILT IN ARRAY METHODS 
//  //======================

//  const moreMovies = [" Saathiya" , " Ishq Wishq Pyar wyar" , " 96 Tamil "]

//  //combining 2 arrays

//  const allMovies = movies.concat(moreMovies);
//  console.log(allMovies);

// //adding a string to the end

//  allMovies2 = allMovies.concat("Crash Landing On You");
// console.log(allMovies2);
// console.log(movies);

// // to join 

// let  movieString = allMovies2.join ();
// console.log(movieString);

// console.log ('I have the following movies :' + movieString)

// movieString = allMovies2.join (' AND ');
// console.log(movieString);

// movieString = allMovies2.join (' ------ ');
// console.log(movieString);

// const fruits  = [ 'Mango' , 'Kiwi' , 'Apple', 'Strawberry' ,' Grapes' , 'Blueberry'];
// console.log(fruits);

// const fruits1 = fruits.push ('Banana' , 'Oranges');
// console.log(fruits1);
// console.log (fruits);

// //to remove last element of array

// const veggies = ['Spinach', 'tomato', 'potato' , 'carrot'];
// // let veggies1 = veggies.pop ();
// // console.log(veggies1);
// let veggies2 = ['Radish' ,' cabbage', 'beet'] ;


// console.log(veggies);
//  veggies3 = veggies2.join ( '***' ) ; 
// console.log(veggies3);

// // console.log(veggies3);
// // console.log(veggies2);

// //at method - takes integer value and returns the item at that index, 
// // allowing for positive and negative integers.
// //  Negative integers count back from the last item in the array.

// let index = fruits [3];
// let fruits2 = fruits.at ( 5);
// let fruits2 = fruits.at ( 4);
// let fruits2 = fruits.at ( 7);
// console.log(fruits2);

// Kieraa help ///

let data = "42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
let rows = data.split("\n");

console.log(rows);






