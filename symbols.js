let a = Symbol('mySymbol');
let b = Symbol('mySymbol');

let c = Symbol.for('name');
let d = Symbol.for('name');
//let a = new Symbol(); can't use Sybol not a constructor

console.log(typeof a);
console.log(a);
console.log(a===b);//false two symbols with samen name not equal

console.log(c===d);//equalwhen create with for//copy the link

let symbolName = Symbol.keyFor(c);
console.log(symbolName);

let person = {
  name:'Ruben',
  age:25,
  [Symbol.for('password')]:'Ruben:25',
  [Symbol.for('esim')]:'5555'

}

console.log(person[Symbol.for('password')]);

//find out all Symbols of objects
console.log(Object.getOwnPropertySymbols(person));//array of existing Symbols
