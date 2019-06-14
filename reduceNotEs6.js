// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(array1.reduce(reducer));
// console.log(array1.reduce(reducer, 5));
// console.log(array1.reduce());// typeError

// [0, 2, 4, 8].reduce(function(previousValue, currentValue, index, array) {
//   return previousValue + currentValue;
// });


// first argument previous value array first element
//second argument currentValue arrays second currentValue
//third argument index  index starts from 1 not 0
//forth value its array


var friends = [
{ name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
{ name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
{ name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 }
]

var allbooks = friends.reduce(function(prev, curr) {
  return [...prev, ...curr.books];
}, []);

var allbooks = friends.reduce(function(prev, curr) {
  return [...prev, ...curr.books];
}, ["in this array will pushh all books include thos element"]);

console.log(allbooks, 'kkkkk');
