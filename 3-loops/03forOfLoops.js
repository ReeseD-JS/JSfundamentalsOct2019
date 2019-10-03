/*
FOR OF LOOPS

*/
////*******************************************

//FOR Ins are for objects ... for of are for arrays

//FOR OF loops are ITERABLE

***********************************//


let student = {
    name: "Peter",
    awesome: true,
    degree: "Javascript",
    week: 1,
}

for (item of student) {
    console.log(item);
}


let catArray = ['tabby', 'british short', 'burmese', 'main coon', 'rag doll'];
for (cat of catArray) {
    console.log(cat, 'says meow');
}