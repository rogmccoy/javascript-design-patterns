let myFunction = (n) => {
    if (typeof n == 'number') {
        return true
    } else {
        return false
    }
}

let aVar = myFunction("Jen");
// aVar = aVar(0); //true

let aNum = 9;
// console.log(typeof aNum);

if (!aVar) {
    console.log(`It's Not a number!  The return val from function is ${aVar}`);    
} 
// else {
//     console.log(`It's a number!  The return val from function is ${aVar}`);
    
// }
// console.log(aVar);
