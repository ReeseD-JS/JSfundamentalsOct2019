/*

FOR IN LOOPS

*/

//FOR IN loops are ENUMERABLE

// Great for iterating over values(items) in an object

let student = {
    name: "Peter",
    awesome: true,
    degree: "Javascript",
    week: 1,
}

for (item in student) {
    console.log('item =>', item);
    console.log('student[item] =>', student[item])
}



let dogArray = ['collie', 'pitbull', 'newfie', 'dachsund', 'shiba inu'];
for (dog in dogArray) {
    console.log(dog);
}



let studentName = 'reese';
let newName = '';

for (letter in studentName) {
  if(letter == 0) {
      newName += studentName[letter].toUpperCase();
      console.log(studentName[letter], newName);
  } else {
      newName += studentName[letter].toLowerCase();
      console.log(studentName[letter], newName)
  }
}