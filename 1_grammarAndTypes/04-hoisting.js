//Hoisting 


console.log(scissors);

scissors = 'blue';

console.log(scissors);
var scissors;

//JS reads through code twice...first time it looks for left hand side of variables and functions (declarations). Second pass reads through right hand side and assigns values and expressions (initializing).

//Call HOISTING because JS keeps those variable names stored in memory for quicker reference later.

//VAR hoists but LET does not

b();
console.log(a);

function b();
