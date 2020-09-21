var song; //initiating our variable
var analyzer;
function preload() {
 song = loadSound ('data/drum.mp3'); 
}

function setup() {
  //song = loadSound ('data/drum.mp3'); //associate our sound to the variable 'song'
  createCanvas (windowWidth, windowHeight); // create full window canvas
  background(0);
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
  fill(120);
  textSize(72);
  textAlign(CENTER,CENTER);
}


function draw() {
  background(80,90,80);
  var volume = analyzer.getLevel();
  volume*=400;
  
  if (mouseX < width/2) {
  fill(255);
  textSize(volume*2);
  text('play', width/4, height/2); 
  }

  else {
  fill(0);
  textSize(volume*2);
  text('stop', width/1.5, height/2); 
  }
}

function mousePressed() {
  if (song.isPlaying()) {
    background(0);
    song.stop(); // if the song is playing, stop it
    song.noLoop();
  }
  
  else {
    background(80,90,80);
    song.loop();
    song.play();

}
  
}
