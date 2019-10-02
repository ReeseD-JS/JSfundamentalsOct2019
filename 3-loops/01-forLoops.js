/*
FOR LOOPS
*/

//For Loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition, is reached.


const vacationSpots = ['Florence', 'Copenhagen', 'Istanbul'];
    console.log(vacationSpots[0])
    console.log(vacationSpots[1])
    console.log(vacationSpots[2])


// (initialization ; stopping condition; iteration statement)

for ( let i = 0; i < 10; i++) {
    console.log(i)
}


for ( let i = 0; i <= 20; i += 2 ) {
    console.log(i)
}

for ( let i = 10; i >= 0; i-= 1 ) {
    console.log(i)
}

for ( let i = 0; i >= -24; i -= 2 ) {
    console.log(i)
}


let name = 'Reese'

for ( let i = 0; i < name.length; i++ ) {
    console.log(name[i]);
}

// parentheses used for methods... charat(1)
// square brackets used for sq bracket notation... name [1]



let sum = 0;

for ( let i = 1; i <= 50; i++) {
    sum += i;
}
console.log(sum);

