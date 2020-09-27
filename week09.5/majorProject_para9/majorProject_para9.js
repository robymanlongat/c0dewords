//flashing effect is a remix of https://editor.p5js.org/doubleshow/sketches/BJdU6tFSM - "Blinking Example" by doubleshow
let mode = 0;
var para9 = "An error has been detected in your consciousness. All source-code is corrupt. Continue?";
var i = 0

function setup() {
  createCanvas(1000, 700);
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
  i = i + 2 
  if (i % 10 === 0){
    fill(0);
    text (para9,200,200);
  } 
  else {
    fill(255);
    text (para9,200,200);
  }
}

function scene2() {
  background (255);
  fill (255,0,0);
  textSize (48);
  text ("OK",200,200);
}
