var Task = require('./task');
var Task2 = require('./class');

var task1 = new Task('create a demo for constructors');
var task2 = new Task('create a demo for modules');
var task3 = new Task('create a demo for singletons');
var task4 = new Task('create a demo for prototypes');
var task5 = new Task2('new task from class');

console.log(task1);

task1.complete();
task2.save();
task3.save();
task4.save();
task5.complete();