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

    // generateComets(10);
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

//Toast Notification
M.toast({html: 'I am a toast!'})


//Toggle Hamburger Menu Nav
function toggleNav() {
    document.getElementById('navWrapper').classList.toggle('active');
    document.getElementById('navTrigger').classList.toggle('active');
}

// Shooting Stars Animations
function generateCometsById (number) {
    //Generate Number of Comets in DOM
    var svg = document.getElementsByTagName('comet')[0]; //Get svg element
    var newElement = document.createElementNS("comet", 'path'); //Create a path in SVG's namespace
    newElement.setAttribute("d","M 0 0 L 10 10"); //Set path's data
    newElement.style.stroke = "#000"; //Set stroke colour
    newElement.style.strokeWidth = "5px"; //Set stroke width
    svg.appendChild(newElement);

    //Position randomly
    var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
    var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

    //Activate CSS Animation randomly
    $newdiv.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'display':'none'
    }).appendTo( 'hero' ).fadeIn(100).delay(1000).fadeOut(500, 
        function(){ 
        $(this).remove();
        makeDiv(comet); 
    }); 
    console.log(generateComets(10));
}

//Copy to Clipboard Button
function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}
