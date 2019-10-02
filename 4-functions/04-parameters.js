// PARAMETERS
//           1
function hi(name) {
    console.log(`Hi ${name}!`);    //String interpolation
}                 //    2

hi('John')
   // 3
hi('Mandy')
hi('Becky')

//1 The parameter(s) we need to take into the function
//2 Using string interpolation, we can refer to the parameter we passed
//3 We define what the parameter'svalue will be


function pet(animal) {
    console.log(`My pet's name is ${animal}!`);
}

pet('Buckshot')



function bid(first, last) {
    let fullName = first + ' ' + last;
    console.log(`Hello, my name is ${fullName}!`)
}

bid('Buckshot', 'McGee')