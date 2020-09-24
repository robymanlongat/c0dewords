var para2 = "Your health will one day disappear and you will die without meaning. End?"
let x,y;

function setup() {
createCanvas (1000,700);
background (255);
strokeWeight ();
x = width;
y = 500;

}


function draw() {
background (255);
fill (0);
textAlign (RIGHT);
textSize (12);
text (para2,x,y);
x = x - 1;
  if (x < 0) {
  x = width; 
  }

}

function mousePressed() {
background (255);
fill (255,0,0);
textSize (48);
text ("OK",x,y);
x = x - 1;
  if (x < 0) {
  x = width;
  }
}
