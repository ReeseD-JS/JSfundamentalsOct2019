//* Scope
//* Scopeis where variables are and aren't accessible in our code...think baby jail;

//Global Scope: The World
//Local Scope: Indianapolis

// Scope determines the accessibility / visibility of certain variables

var x = 12;

function doesScope() {
    var x = 33;
    console.log(x);
}
doesScope();
console.log(x);



var y = 12;

function isScope() {
    y = 33;
    console.log(y);
}
isScope();
console.log(y);




var x = 12;

function varTest() {
    var x = 33;
    if (1 == 1) {
        var x = 45;
        console.log(x);
    }
    console.log(x);
}

varTest();
console.log(x);




// blockscope, function scope
var x = 12;

function letTest() {
    var x = 33;
    if (true){
        let x = 45;
        console.log(x);
    }
    console.log(x);
}

letTest();
console.log(x);





function constTest() {
    const scope = 1;
    if (true) {
        const scope = 2;
        console.log(scope);
    }
    console.log(scope);
}
constTest();