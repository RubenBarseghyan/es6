/*
collection map
*/
let map = new Map();
// let oo = {'name':'poxos'}
// map.set(oo);
map.set('str', 'string');
map.set(1, 'hello');
map.set(true, 'ruben');

console.log(typeof map);//object
map.forEach((e) => {
  console.log(e, 'forech in set');
})

console.log(map.get('str'));
console.log(map.get(1));
console.log(map.get(true));

//to get the size of collection method size
console.log(map);
console.log(map.size);//3

//get if collection has data with exact ket use method has

console.log(map.has('str'));//return true;
console.log(map.has('kkk'));//return false;

// map delete method delete the key value and if there is key return true

// let a = map.delete('str');
console.log(map, 'after deleting thekey');
// console.log(a);
// map.clear();
console.log(map, 'mapAfter clear');//empty map
//iteration over map keys(), values(), entries()

console.log(map.keys(), 'keyssssssssssssssss');
console.log(map.values(), 'valuesssssssssszszsz');
console.log(map.entries(), 'entriiiiiiiiies');//arrays of objects with keys values

/*
collection set
*/

let jack = {name: 'Jack'};
let max = {name: 'Max'};
let vaxo = {name: 'Vaxo'};

let users = new Set();
  users
  .add(jack)
  .add(jack)
  .add(jack)
  .add(max)
  .add(vaxo)

  console.log(users.size);//3
  users.forEach((e) => {
    console.log(e)
  })

  //have all methods as colection of map
  
