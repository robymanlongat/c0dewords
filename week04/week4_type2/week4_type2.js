function preload() {
  font = loadFont('data/CourierStd.otf');

}
var spin=90;

function setup() {
  createCanvas(600,600);
  background(240);
  fill(0);
  angleMode(DEGREES);
  textSize(32);
  textFont(font); //textFont(font,32)
  textAlign(CENTER);
  frameRate(5);
}


function draw() {
  fill(0);
  translate(300,300);
  rotate(spin);
  text('medium',0,0);
  spin=spin+7;

  stroke(0);
  fill(240,20);
  //rect (100,100,500,500);
  
  rotate (0);
  noStroke();
  fill(240);
  pop();
  background(240,30);
 
}
