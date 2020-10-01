var para7 = 'The machine has lost your identity. You have become innessential. Create alias?'
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
//  background (255);
  fill (0);
  textSize (12);
  text (para7,mouseX,mouseY);
}

function scene2() {
  background (255);
  fill (255,0,0);
  textSize (48);
  text ("OK",700,200); 
}
