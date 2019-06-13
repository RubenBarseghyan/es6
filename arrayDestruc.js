let people = ['ruben', 'karen', 'vaxinak', 'poxos'];
let [ruben, karen, vaxinak, poxos] = people;
console.log(ruben, karen, vaxinak, poxos);

let rate = [5, 7, 10, [555, 666]];
let [low, middle, high, [higher, anotherHigher, higher9=9999]] = rate;
console.log(low, middle, high, higher, anotherHigher, higher9);
//when  have array in array we can use destructuring array

//we can use as function parametrs;
