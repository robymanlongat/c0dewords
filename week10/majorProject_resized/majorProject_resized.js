let mode = 0;

let para1 = 'Technological determinism will cause you great pain. Continue?'

let para2 = 'Your health will one day disappear and you will die without meaning. End?'
let x,y;

function setup() {
createCanvas (windowWidth,windowHeight);
background (255);
strokeWeight ();
  x = width;
  y = height/1.4;
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
    case 3:
      scene3();
      break;
    case 4:
      scene4();
      break;
    case 5:
      scene5();
      break;
    case 6:
      scene6();
      break;
    case 7:
      scene7();
      break;
    case 8:
      scene8();
      break;
    case 9:
      scene9();
      break;
    case 10:
      scene10();
      break;
    case 11:
      scene11();
      break;
    case 12:
      scene12();
      break;
    case 13:
      scene13();
      break;
    case 14:
      scene14();
      break;
     case 15:
      scene15();
      break;
     case 16:
      scene16();
      break;
     case 17:
      scene17();
      break;
     case 18:
      scene18();
      break;
     case 19:
      scene19();
      break;
     case 20:
      scene20();
      break;
     case 21:
      scene21();
      break;
      case 22:
      scene22();
      break;
     case 23:
      scene23();
      break;
     case 24:
      scene24();
      break;
     case 25:
      scene25();
      break;
      case 26:
      scene26();
      break;
     case 27:
      scene27();
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
  text (para1,width/10,height/4,100,100);
  }

function scene2() {
  background (255);
  fill (255,0,0);
  textSize (48);
  text ("OK",width/10,height/4,100,100); 
  }

function scene3() {
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
  
function scene4() {
  background (255);
  fill (255,0,0);
  textSize (48);
  text ("OK",x,y); 
  }
  
function scene5() {
  background (255);
  fill (0);
  textSize (12);
  textAlign (LEFT);
  text('There', width/1.4, height/1.75);
  }

function scene6() {
  background (255);
  fill (0);
  textSize (12);
  text('There are', width/1.4, height/1.75);
  }

function scene7() {
  background (255);
  fill (0);
  textSize (12);
  text('There are many', width/1.4, height/1.75);
  }

function scene8() {
  background (255);
  fill (0);
  textSize (12);
  text('There are many men', width/1.4, height/1.75);
  }

function scene9() {
  background (255);
  fill (0);
  textSize (12);
  text('There are many men and', width/1.4, height/1.75);
  }

function scene10() {
  background (255);
  fill (0);
  textSize (12);
  text('There are many men and women', width/1.4, height/1.75);

  }

function scene11() {
  background (255);
  fill (0);
  textSize (12);
  text('There are many men and women', width/1.4, height/1.75);
  text('who', width/1.42, height/1.69);
  }

function scene12() {
  background (255);
  fill (0);
  textSize (12);
  text('There are many men and women', width/1.4, height/1.75);
  text('who dream', width/1.42, height/1.69);
  }

function scene13() {
  background (255);
  fill (0);
  textSize (12);
  text('There are many men and women', width/1.4, height/1.75);
  text('who dream of', width/1.42, height/1.69);
  }

function scene14() {
  background (255);
  fill (0);
  textSize (12);
  text('There are many men and women', width/1.4, height/1.75);
  text('who dream of making', width/1.42, height/1.69);
  }

function scene15() {
  background (255);
  fill (0);
  textSize (12);
  text('There are many men and women', width/1.4, height/1.75);
  text('who dream of making love', width/1.42, height/1.69);
  }

function scene16() {
  background (255);
  fill (0);
  textSize (12);
  text('There are many men and women', width/1.4, height/1.75);
  text('who dream of making love to', width/1.42, height/1.69);
  }

function scene17() {
  background (255);
  fill (0);
  textSize (12);
  text('There are many men and women', width/1.4, height/1.75);
  text('who dream of making love to you', width/1.42, height/1.69);
  }

function scene18() {
  background (255);
  fill (0);
  textSize (12);
  text('There are many men and women', width/1.4, height/1.75);
  text('who dream of making love to you but', width/1.42, height/1.69);
  }

function scene19() {
  background (255);
  fill (0);
  textSize (12);
  text('There are many men and women', width/1.4, height/1.75);
  text('who dream of making love to you but', width/1.42, height/1.69);
  text('you', width/1.39, height/1.63);
  }

function scene20() {
  background (255);
  fill (0);
  textSize (12);
  text('There are many men and women', width/1.4, height/1.75);
  text('who dream of making love to you but', width/1.42, height/1.69);
  text('you will', width/1.39, height/1.63);
  }

function scene21() {
  background (255);
  fill (0);
  textSize (12);
  text('There are many men and women', width/1.4, height/1.75);
  text('who dream of making love to you but', width/1.42, height/1.69);
  text('you will never', width/1.39, height/1.63);
  }

function scene22() {
  background (255);
  fill (0);
  textSize (12);
  text('There are many men and women', width/1.4, height/1.75);
  text('who dream of making love to you but', width/1.42, height/1.69);
  text('you will never get', width/1.39, height/1.63);
  }

function scene23() {
  background (255);
  fill (0);
  textSize (12);
  text('There are many men and women', width/1.4, height/1.75);
  text('who dream of making love to you but', width/1.42, height/1.69);
  text('you will never get to', width/1.39, height/1.63);
  }

function scene24() {
  background (255);
  fill (0);
  textSize (12);
  text('There are many men and women', width/1.4, height/1.75);
  text('who dream of making love to you but', width/1.42, height/1.69);
  text('you will never get to know', width/1.39, height/1.63);
  }

function scene25() {
  background (255);
  fill (0);
  textSize (12);
  text('There are many men and women', width/1.4, height/1.75);
  text('who dream of making love to you but', width/1.42, height/1.69);
  text('you will never get to know them.', width/1.39, height/1.63);
  }

function scene26() {
  background (255);
  fill (0);
  textSize (12);
  text('There are many men and women', width/1.4, height/1.75);
  text('who dream of making love to you but', width/1.42, height/1.69);
  text('you will never get to know them.', width/1.39, height/1.63);
  text('Autodestruct?', width/1.30, height/1.57);
  }

function scene27() {
  background (255);
  fill (255,0,0);
  textSize (48);
  text('OK', width/1.30, height/1.66);
  }
