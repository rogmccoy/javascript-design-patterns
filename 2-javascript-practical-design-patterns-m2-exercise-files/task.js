var task = {
    title: 'My Title',
    description: 'My Description'
};


// defining a function on the task object
Object.defineProperty(task, 'toString', {
    value: function () {
        return this.title + ' ' + this.description;
    },
    // this prevents the value from being changed
    writable: false,
    // enumerable means if it can be iterated over or not
    enumerable: false,
    configurable: false
});

// this will not change toString because writable is set to false
task.toString = function() {
    return this.title + ' I have changed the function ' + this.description;
}

console.log(task.toString());


console.log(task);
console.log(Object.keys(task));

// this will throw an error because configurable is set to false
// Object.defineProperty(task, 'toString', {
//     writable: true
// });


var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
    value: function () {
        return this.title + ' is urgent';
    },
    writable: false,
    enumerable: false,
    configurable: false
});

// console.log(urgentTask.toString());