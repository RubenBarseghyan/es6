class Task{
  constructor(title="", isCompleted = false){
    this.title = title,
    this._isCompleted = isCompleted,
    Task.counter +=1
  }
//static methods define in class  after constructor in constract of proporties which define after class
static getDefaultTitle(){
    return 'hello ruben it was returned from static method of class ';
}

  completed(){
    this._isCompleted = true;
  }

  get isCompleted(){
    return this._isCompleted === true ? 'task is completed':'task is Not Completed';
  }

}
//static properties must  define immidiatly after define class out of class
Task.counter = 0;

let task = new Task();
let task2 = new Task("when", false);

console.log(task2, 'beforeMethodCall');
task2.completed();
console.log(task2, 'after call methodCall');

console.log(Task.counter);
console.log(Task.getDefaultTitle());

console.log(task2.isCompleted, 'using get');
