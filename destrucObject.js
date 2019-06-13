let man = {
  name:'vaxinak',
  age :25,
  address: {
    city:'Minsk'
  }
}
let {name:manName = "max", age:manAge = 55} = man;

let {name="volod", age=77} = {};
let {address:{city}} = man;;

console.log(name, age);
console.log(manName, manAge);

console.log(city);

function getData({name, age}){
  console.log(name, age);
  return {name, age}
}

let res = getData(man);
console.log(res, 'ressss')// new object name:'vaxinak' ,age :25,
