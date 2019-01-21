var Task = require('./task');
var Repo = require('./taskRepository');

// var task1 = new Task(Repo.get(1));

var some_tasks = {}

// var a_task = new Task({name: 'a_task'});
    
// var task2 = new Task({name: 'create a demo for modules'});
// var task3 = new Task({name: 'create a demo for singletons'});
// var task4 = new Task({name: 'create a demo for prototypes'});

for (i = 0; i < 5; i++) {
    some_tasks["task" + i] = 
        new Task({name: 'task' + i});
}

// console.log(a_task);

for (tasks in some_tasks) {
    // console.log(tasks, some_tasks[tasks]);
    for (nested_tasks in some_tasks[tasks]) {
        console.log(nested_tasks + ': ' + some_tasks[tasks][nested_tasks]);
        
    }
    
}

// console.log(some_tasks.task0);


// task1.complete();
// task1.save();
// task2.save();
// task3.save();
// task4.save();