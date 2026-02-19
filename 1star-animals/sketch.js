let animal1;
let bear;
let cat;
let monkey;


function setup() {
    createCanvas(400,400);
    // TODO create the canvas
    animal1 = new Animal(); // TODO fill in the parameters
}

function draw() {
    background(0);
    // TODO draw the background
    //animal1.display();
    image(bear, 0,0);
    image(cat, 20, 100);
    image(monkey, 40, 100);
}

function keyPressed() {
    // TODO move the animal in response to the WASD keys
    if (key === "w") {
        animal1.moveY(-10);
    } // etc
}

class Animal{
    x;
    y;
    speedX;
    speedY;
    external;
}

constuctor();
    this.x = 50;
this.y = 50;
this.external = 20;


    //this.speedX = 3;
    //this.speedy = 3;

    function preload() {
        bear = loadImage ('/assets/bear.jpg');
        cat = loadImage ('/assets/cat.jpg');
        monkey = loadImage ('/assets/monkey.jpg');

    }

function display(){

}