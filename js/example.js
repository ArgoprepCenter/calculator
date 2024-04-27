let a = 2;
let b = 2;
console.log(a + b);

function sum(a, b) {
    return a + b;
}

this.anotherSum = function(a, b) {
    return a + b;
}

console.log(anotherSum(a, b));
console.log(sum("2","2"));