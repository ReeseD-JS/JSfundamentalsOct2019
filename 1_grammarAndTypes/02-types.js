//Boolean
//boolean can represent true/false , off/on, yes/no , aka binary

let i = true;
let j = false;

console.log(i);

//null = empty value. not 0, not undefined...like empty container, nothing in it but stills exists as a space to fill

let empty = null;
console.log(empty);


//undefined = no value assigned, not even an empty container. it isNOT an error.

let grass;
console.log(grass)

//numbers

let degrees = 90;
console.log(degrees)

let precise = 99999999;
console.log(precise);

let rounded = 9999999999;

let notQuite

let numbersAreHard


//Strings...datatypes used to represent text and wrapped in either single or double quotes.

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne,stringTwo)


//Objects

let car = {
    color: 'red',
    tires: 4,
    extras: 'A/C and Radio',
    cool: true
}

console.log(car);
console.log(typeof car);

//Arrays...containers that hold lists of items;

let list = [ 'item 1', 'item 2', 'item 3']
//   1     2     3

//1 - name of the array
//2 - square brackets = array;
//3 - each item, regardless of datatype, is seperated by commas.

let grocerylist = ['milk', 'apples', 'cereal']
console.log(grocerylist);
console.log(typeof grocerylist);

//addition v concatenation
//checkout JS coersion

let firstName = 'Reese';
let lastName = 'Dick';
let houseNumber = 6917;
let street = 'Bentgrass Dr.';
let city = 'Indianapolis';
let state = 'IN';
let zipcode = 46236;

console.log(firstName, lastName, houseNumber, street, city, state, zipcode)


//Strings - Properties
/*
Properties are qualities associated with a datatype. Strings have properties associated with that string. Eg the length of a string is a property */



let myName = 'Dickensworth';
console.log(myName.length);

//Methods
//methods are tools that can help us manipulate our data

//*.property = no parentheses;
//*.methods() = parentheses;

let myNameIs = "Dickensworth";
console.log(myNameIs.toUpperCase());

let home = 'My home is indianapolis';
console.log(home.includes('indianapolis'));


//

let sent = 'This sentence will be split into individual parts';

console.log(sent.split(' '))
