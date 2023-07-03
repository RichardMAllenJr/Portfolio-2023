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

//     //Generate Number of Comets in DOM
//     var svg = document.getElementsByTagName('comet')[0]; //Get svg element
//     var newElement = document.createElementNS("comet", 'path'); //Create a path in SVG's namespace
//     newElement.setAttribute("d","M 0 0 L 10 10"); //Set path's data
//     newElement.style.stroke = "#000"; //Set stroke colour
//     newElement.style.strokeWidth = "5px"; //Set stroke width
//     svg.appendChild(newElement);
//     //Position randomly
//     var posx = (Math.random() * ($(document).width() - divsize)).toFixed();

//     var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

//     //Activate CSS Animation randomly
//     $newdiv.css({
        
//         'position':'absolute',
//         'left':posx+'px',
//         'top':posy+'px',
//         'display':'none'
//     }).appendTo( 'hero' ).fadeIn(100).delay(1000).fadeOut(500, 
//         function(){ 
//         $(this).remove();
//         makeDiv(comet); 
//     }); 
// }


ShootingStar = function(id) {
    this.n = 0;
    this.m = 0;
    this.defaultOptions = {
    velocity: 8,
    starSize: 10,
    life: 300,
    beamSize: 400,
    dir: -1
    };
    this.options = {};
    id = (typeof id != "undefined") ? id : "";
    this.capa = ($(id).lenght > 0) ? "body" : id;
    this.wW = $(this.capa).innerWidth();
    this.hW = $(this.capa).innerHeight();
};

ShootingStar.prototype.addBeamPart = function(x, y) {
    this.n++;
    var name = this.getRandom(100, 1);
    $("#star" + name).remove();
    $(this.capa).append("<div id='star" + name + "'></div>");
    $("#star" + name).append("<div id='haz" + this.n + "' class='haz' style='position:absolute; color:#FF0; width:10px; height:10px; font-weight:bold; font-size:" + this.options.starSize + "px'>·</div>");
    if (this.n > 1) $("#haz" + (this.n - 1)).css({
    color: "rgba(255,255,255,0.5)"
    });
    $("#haz" + this.n).css({
    top: y + this.n,
      left: x + (this.n * this.options.dir)
    });
}

ShootingStar.prototype.delTrozoHaz = function() {
    this.m++;
    $("#haz" + this.m).animate({
    opacity: 0
    }, 75);
    if (this.m >= this.options.beamSize) {
    $("#ShootingStarParams").fadeOut("slow");
    }
}

ShootingStar.prototype.getRandom = function(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

ShootingStar.prototype.toType = function(obj) {
    if (typeof obj === "undefined") {
      return "undefined"; /* consider: typeof null === object */
    }
    if (obj === null) {
    return "null";
    }
    var type = Object.prototype.toString.call(obj).match(/^\[object\s(.*)\]$/)[1] || '';
    switch (type) {
    case 'Number':
        if (isNaN(obj)) {
        return "nan";
        } else {
        return "number";
        }
    case 'String':
    case 'Boolean':
    case 'Array':
    case 'Date':
    case 'RegExp':
    case 'Function':
        return type.toLowerCase();
    }
    if (typeof obj === "object") {
    return "object";
    }
    return undefined;
}

ShootingStar.prototype.launchStar = function(options) {
    if (this.toType(options) != "object") {
    options = {};
    }
    this.options = $.extend({}, this.defaultOptions, options);
    this.n = 0;
    this.m = 0;
    var i = 0,
    l = this.options.beamSize,
    x = this.getRandom(this.wW - this.options.beamSize - 100, 100),
    y = this.getRandom(this.hW - this.options.beamSize - 100, 100),
    self = this;
    for (; i < l; i++) {
    setTimeout(function() {
        self.addBeamPart(x, y);
      }, self.options.life + (i * self.options.velocity));
    }
    for (i = 0; i < l; i++) {
    setTimeout(function() {
        self.delTrozoHaz()
      }, self.options.beamSize + (i * self.options.velocity));
    }
    $("#ShootingStarParams").html("Launching shooting star. PARAMS: wW: " + this.wW + " - hW: " + this.hW + " - life: " + this.options.life + " - beamSize: " + this.options.beamSize + " - velocity: " + this.options.velocity);
    $("#ShootingStarParams").fadeIn("slow");
}

ShootingStar.prototype.launch = function(everyTime) {
    if (this.toType(everyTime) != "number") {
    everyTime = 10;
    }
    everyTime = everyTime * 1000;
    this.launchStar();
    var self = this;
    setInterval(function() {
    var options = {
        dir: (self.getRandom(1, 0)) ? 1 : -1,
        life: self.getRandom(400, 100),
        beamSize: self.getRandom(700, 400),
        velocity: self.getRandom(10, 4)
    }
    self.launchStar(options);
    }, everyTime);
}

})();

$(document).ready(function() {
var shootingStarObj = new ShootingStar("body");
shootingStarObj.launch();
});