var Task = function (name) {
    this.name = name;
    this.completed = false;
}

// prototypes are more efficient
// each object points to the prototype instead of having a copy of the function
Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
};

module.exports = Task;