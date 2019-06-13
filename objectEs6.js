//creates dynamic keys for objects \\before it use defineProprty

//define property adds a prperty which call a function

// Object.defineProperty( newObject, 'a', {
//    value: "some value",
//    writable: true,
//    enumerable: true,
//    configurable: true
// });

let nameB = "poxos";
let ageB = 25;
let gender;


let objTry = {
  nameB: "define",
  ageB,
  gender, //gender undefned
  greetHim: function(){
    return`hello ${this.nameB}`;
  }
}

objTry.newProperty ="vaxinak";//

//es5
Object.defineProperty(objTry, 'password', {
  get: function(){
    return this.nameB +this.ageB
  },
});


console.log(objTry, `objTryyyy`);
console.log(objTry.password, 'it"s define property which call as property but works as a function');

console.log(objTry.greetHim(), 'simple method in object must be called()');
