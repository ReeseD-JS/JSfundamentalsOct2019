// Arrow Functions

function coffee() {
    console.log('Coffee is good');
}

let coffee = () => {
    console.log('I love coffee');
}

coffee()


let cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cat(s) and ${puppy} dog(s)`);
}

cats(1, 12)

// Concise body and Block Body

//Concise body does not need parentheses, unless you have more than one parameter

// Concise below

let apples = x => console.log(`There are ${x} apples.`);
apples(10);

//More than one parameter will require parentheses
// Return (if one-line chonk arrow function) is implied

//block body below

let apples = (x) => { console.log(`The are ${x} apples.`) };
apples(20);

//LINEBREAKS ARE BAD

let func = () => console.log('hi'); //Good

let func = ()
=> console.log('hi'); //Example of BAD Linebreak...no linebreaks with fat arrows in CONCISE body