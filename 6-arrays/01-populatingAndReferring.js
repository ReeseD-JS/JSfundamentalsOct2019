let list = ['orange', 'banana', 'oreos']

console.log(list[1])




let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true,['John', 'Eric', 'Sam']]

console.log(students instanceof Array);
console.log(students[1]);
console.log(students[3])

let name = students [6][2]
console.log(`Hello ${name}, how are you today?`)






//Example below uses FOR OF LOOP to loop through the array

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

//food.push('Cool Beans');
food.splice(3, 2, 'Cookies') 
//food.pop()
//food.shift()
//food.unshift('Pasta', 'Hamburger')

for (placeholderdoesntmatter of food) {
    console.log(placeholderdoesntmatter)
}



//Example below uses FOR IN LOOP to loop through array...DONT USE FOR IN LOOPS FOR ARRAYS


let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for (placeholderdoesntmatter in food) {
    console.log(placeholderdoesntmatter)
    console.log(food[placeholderdoesntmatter])
}




//////////////////////////////////


let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
food.forEach(f => {console.log(f)})
//food.forEach((f, number) =>{ console.log(f); console.log(number)})
food.forEach((f, number, array)=> {console.log(f); console.log(number); console.log(array)})


//////////////////////////////////////////////////////Example below is the same as the last example riht above


let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

let foodFunction = () => {
    for (f in food){
        console.log(f),
        console.log(food[f]),
        console.log(food)
    }
}
foodFunction()


//////////////////////////////////////////////


let movies = ['Sorcerers Stone', 'Chamber of Secrets', 'Prisoner of Azkaban', 'Goblet of Fire']
//movies.push('Order of the Phoenix')
//movies.splice(2, 1, 'really wish i could replace movies 5 through 7')
movies.forEach(m => {console.log(m)})



////////////

let long = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(long.length)

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple']
//console.log(colors.length)
//console.log(colors.toString())
//console.log(colors instanceof Array)
//console.log(typeof colors)
//console.log(typeof colors.toString())

colors.forEach(x => console.log(x))


////////////////////////////////////////////



let arr = [1, 2, 3, 4, 5]

//console.log(arr instanceof Array)

//console.log(arr.reverse())

//arr.forEach(a =>{console.log(a)})

if(arr instanceof Array === true){
    let revArr = arr.reverse()
    revArr.forEach(a =>console.log(a))
    console.log(revArr)
}