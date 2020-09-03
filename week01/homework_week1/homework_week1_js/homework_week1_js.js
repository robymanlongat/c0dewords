function setup() {
createCanvas (650,400);

background (22,25,25);
stroke (200,100,0);
strokeWeight (50);

}


function draw() {

//r
stroke (20,100,50);
line (100,100,100,300);
line (100,200,200,300);
ellipse (150,150,100,100);
ellipse (150,150,50,50);

//m
stroke (20,100,50);
line (300,100,300,300);
line (300,100,375,200);
line (375,200,450,100);
line (450,100,450,300);

//!
stroke (mouseX,mouseY,(mouseX-mouseY));
line (550,235,550,100);
line (550,300,550,300);

}
