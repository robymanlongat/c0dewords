//wiggle from (https://editor.p5js.org/bengrosser/sketches/rycQ1D9zN) - 'Hello World Wiggle' by bengrosser
var para12= "A nuclear holocaust is imminent. Erase memory?";
let mode = 0;

function setup() {
  createCanvas(1000,700);
  background (255);
  strokeWeight ();
  
}


function draw() {

  switch (mode) {
    case 0:
      background(255);
      break;
    case 1:
      scene1();
      break;
    case 2:
      scene2();
      break;
    default:   
    }
}

function mousePressed() {
  mode++;
  }

function scene1() {
  frameRate (30);
  background (255);
  fill (0);
  textSize (12);
  text (para12, random(500,505), random(500,505));
}

function scene2() {
  background (255);
  fill (255,0,0);
  textSize (48);
  text ("OK",600,510); 
}
