let arr1 = [4, 5, 8, 8];
let arr2 = [45, 55, 85, 85];
let c = arr1.concat(arr2)
console.log(c);//create new array
// Array.prototype.push.apply(arr1, arr2);
console.log(arr1, 'arr1');
console.log([...arr1, ...arr2], 'spread');

//hybrid object

const person = {
  name:"karen",
  age:25
}

const person1 = {
  name:"vaxinak"
}

const hybrid = Object.assign(person, person1);
console.log(hybrid, 'hhhhybrid');
//es6
let es6hybrid = {
  ...person,
  ...person1
}
console.log(es6hybrid, 'es6hyb');
//REST

function foo( ...ppREST){
  console.log(ppREST);
}
foo(4, 5, 5, 4, 2, 55);
