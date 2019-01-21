var repo = function () {

    var called = 0;

    var save = function (task) {
        called++;
        console.log('Saving ' + task + 
                    ' Called ' + called + ' times');
    }
    console.log('newing up task repo');
    return {
        save: save
    }
}
// this will act as a singleton
module.exports = new repo;
// it is similar to this:
// module.exports = repo();