var para1 = "Technological determinism will cause you great pain. Continue?"
var w = 50
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
  background (255);
  fill (0);
  textAlign (CENTER,CENTER);
  textSize (12);
  text (para1,100,250,100,100);
}

function scene2() {
  background (255);
  fill (255,0,0);
  textSize (48);
  text ("OK",100,250,100,100); 
}
