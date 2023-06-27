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

//Toggle Light Mode
function toggleDark() {
    document.body.classList.toggle('dark');
}

function multiplyByTwo(number) {
    number= number * 5
}


