var bg;
var sprite;
var chop;
var x = 620;
var cxspeed = 4;
var cyspeed = 3;
var xpos=20;
var ypos=100;


function setup(){
	createCanvas(800,600);
	bg=loadImage("sprite.png");
	sprite=loadImage("bg.svg");
	chop=loadImage("chop.png");
}

function draw () {
	//make the image the background
	background(bg);
	image(sprite,5,100,200,100);
	if ( xpos<0) {
		xpos=600;
	}
	for (var x=0; x<=600; x+=250) {
		image(chop, xpos+x, ypos+100, 100,90);

	}

	for (var x=0; x<=600; x+=270) {
		image(chop, xpos+x+120, ypos+50, 60,150);

	}
xpos=xpos-cxspeed;


  
}
