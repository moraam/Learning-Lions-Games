var sprite5;
var sprite4;
var bg;
var spriteXpos=300;
var spriteYpos=700;
var Yspeed;
var Xspeed;
function setup(){
	createCanvas(700,750);
	bg=loadImage("bg.png");
	sprite5=loadImage("sprite5.png")
	sprite4=loadImage("sprite4.png")
} 
function draw(argument) {
	var x=random(0,700);
	var y=random(0,3050);
	background(bg);
	
	
	for(var x=0;x<700;x+=200){
		for(var y=150;y<3050;y+=200){
		image(sprite4,x,y,130,20);
		}
	}

	for(var x=37;x<700;x+=250){
		for(var y=270;y<3050;y+=200){
		image(sprite4,x,y,137,20);
		}
	}

	for(var x=100;x<700;x+=200){
		for(var y=50;y<3050;y+=350){
		image(sprite4,x,y,180,15);
		}
	}

	if (keyIsDown(LEFT_ARROW)) {
		spriteXpos -=5;
	}
		if (keyIsDown(RIGHT_ARROW)) {
		spriteXpos +=5;

	}
		if (keyIsDown(UP_ARROW)) {
		spriteYpos -=5;
	}
		if (keyIsDown(DOWN_ARROW)) {
		spriteYpos +=5;
	}
	
	if (spriteXpos<0) {spriteXpos=300}
		if (spriteYpos<0) {spriteYpos=200}
			if (spriteXpos>700) {spriteXpos=300}
				if (spriteYpos>700) {spriteYpos=200}
	
image(sprite5,spriteXpos,spriteYpos,40,40);
		
}





