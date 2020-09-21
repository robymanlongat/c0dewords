function preload() {
  font = loadFont('data/CourierStd.otf');

}
var spin=90;

function setup() {
  createCanvas(600,600);
  background(0);
  fill(0);
  angleMode(DEGREES);
  textSize(20);
  textFont(font); //textFont(font,32)
  textAlign(CENTER);
  frameRate(14);
}


function draw() {  
  fill(255,255,0);
  translate(100,500);
  rotate(spin);
  text('rise and shine',0,0);
  spin=spin+6;

  stroke(255,255,0);
  fill(0);
  line (100,100,500,500);
  
  rotate (0);
  noStroke();
  fill(240);
  pop();
  background(200,30);
 
}
