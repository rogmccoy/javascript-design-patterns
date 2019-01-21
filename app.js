let MyObj = function(data) {
    this.fname = data.fname;
    this.lname = data.lname;
    this.complete = false;
}

MyObj.prototype.save = function() {
    console.log(`Completing all tasks.`);
    this.complete = true;
}

MyObj.prototype.printMyObj = function() {
    console.log(`First name is ${this.fname}, last name is ${this.lname}, task completion status is ${this.complete}`);
    
}

let obj1 = new MyObj({fname: 'Roger', lname: 'McCoy'});
obj1.save();
obj1.printMyObj();

