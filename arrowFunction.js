//parametrs have defaults values
function greet(name="vaxinak", age=25){
  return `Hello ${name}, your age is ${age}`;
}

console.log(greet());

//not use for object Constructor cat use new;
//no arguments which is typeof object not Array
//cant use bind apply, call methods
//cant change the value of this its take auto from context where he was declared one level higher Prents context
//not use for object methods
//the are anonymous

let person5 = {
  surName: "ruben",
  hello: function(){
    let _this = this;
    setTimeout(function(){console.log(_this.surName, 'kkkkk')}, 2000);
  }
}
person5.hello();

let person7 = {
  name: "poxos",
  foo: function(){
    setTimeout(()=>console.log(this.name))
  }
}

person7.foo();
///
// const box = document.querySelector('.box');
// box.addEventListener('click', function() {
//   console.log(`First this:`);
//   console.log(this);
//   setTimeout(() => {//if not arrow function retun window object
//     console.log(`Second this:`);
//     console.log(this);
//   }, 500);
// });
// In the console:
// First this:
// <div class=​"box">​…​</div>​
// Second this:
// <div class=​"box">​…​</div>​

let theFirstButton = document.querySelectorAll('button');
console.log(theFirstButton);
theFirstButton[0].addEventListener('click', function(){
  console.log('firts this:', this);
  setTimeout(function(){
    console.log(`second this:`, this)
  }, 1000);
});
