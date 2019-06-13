//1 block scope
//2 not hooisting
//3 not aloow to declare twice
//4 not become globa window object property not poluted global object


//let const var
// let arr = [4, 5, 7, 7, 8, 4];
// for(const i=1;arr.length;i++){
//   console.log(arr[i]); //typeError
// }

// if(true){
//   var a = 15;
// }
// console.log(a);
//
// if(true){
//   const k = 55
// }
// console.log(k)//ReferenceError

// console.log(b);
// let b = 15;//undefined// hoisting

var buttons = document.querySelectorAll('button');
for(var i=0;i<buttons.length; i++){
  var button = buttons[i];
  button.innerHTML = i
  button.onclick = function(x){
    return function(){
      console.log(x)
    }
  }(i);
}
