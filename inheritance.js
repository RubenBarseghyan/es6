//id child have no cunstructor use parent constructor
class Task {
  constructor(title){
    this.title =title
    this.isComplited = false;
  }
  completed(){
    this.isCompleted = true;
  }
}

class SubTask extends Task {
  constructor(title){
    super(title)
  }

  completed(){
   super.completed();  // this.isCompleted = true;
    console.log(`task ${this.title} is completed`);
  }
}

let task = new Task("es6");
let subTask = new SubTask("ehh es6");

task.completed();
subTask.completed();

//class declaration class expression
class Declaration{}

//class expression
let k = class Expression{}
