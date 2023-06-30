document.addEventListener('DOMContentLoaded', function() {
    //Initalizing Material Box
    var options;
    var materialBoxes = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(materialBoxes, options);
    
    //Initializing Modals
    var modalsOptions = {
        opacity: 1,
        preventScrolling: false
    };
    var modals = document.querySelectorAll('.modal');
    var shmodals = M.Modal.init(modals, options);

    generateComets(10);
});

// Integer
let variableNumber = 2;

// String
let variableName ="red"

//Chandge anything to RED background
function changeColor(element) {
    document.getElementById(element).style.backgroundColor = "red";
    //document.getElementById('buttonColor').remove();
}

//Create a new button button
function createButton(){
    let newButton = document.createElement('a');
    newButton.className = "waves-effect waves-light btn";
    newButton.innerHTML = "New Button!";
    newButton.id = "button" + variableNumber;
    variableNumber++;
    newButton.onclick = function() {
        changeColor(newButton.id);
    }
    document.getElementById("Contact").appendChild(newButton);
}

//Toast
M.toast({html: 'I am a toast!'})

// Multiply Number
function multiplyByFive(number) {
    console.log(number * 5);
}
multiplyByFive(100);

// var product = 8 * 5;
// console.log(product);

var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Just Go Home!"]

function golfScore (par, strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes == par - 1 ) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par + 1) {
        return names[4]
    } else if (strokes == par + 2) {
        return names[5]
    } else if (strokes >= par + 3) {
        return names[6]
    };
}

console.log(golfScore (5, 2));

function toggleNav() {
    document.getElementById('navWrapper').classList.toggle('active');
    document.getElementById('navTrigger').classList.toggle('active');
}

function generateComets (number) {
    //Generate Number of Comets in DOM

    //Position randomly

    //Activate CSS Animation randomly
}