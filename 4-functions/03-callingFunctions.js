// CALLING FUNCTIONS

//functions won't run until called or invoked...needs to have "on"button

function hi() {
    console.log('hi')
    return "HI";
}

hi();   //invoking/calling the function

function counting() {
    for ( let i = 0; i <= 10; i++ )
    console.log(i)
}

counting();


let arr = ['This', 'is', 'really', 'cool'];

function beans() {
    for (cool of arr){
        console.log(cool);
    }
}

beans()