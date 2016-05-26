var bg;
var stone1;
var stone1xspeed=3;
var stone1yspeed=3;
var stone1xpos=100;
var stone1ypos=100;
var stone2;
var stone2xspeed=4;
var stone2yspeed=4;
var stone2xpos=300;
var stone2ypos=100;
var stone3;
var stone3xspeed=2;
var stone3yspeed=2;
var stone3xpos=500;
var stone3ypos=100;
var stone4;
var stone4xspeed=3;
var stone4yspeed=3;
var stone4xpos=800;
var stone4ypos=100;
var truck;
function setup(){
	createCanvas(1080,600);
	bg=loadImage("/home/ll18/Documents/GAME1/images/background3.png");
	stone1=loadImage("/home/ll18/Documents/GAME1/images/stone1.png");
	stone2=loadImage("/home/ll18/Documents/GAME1/images/stone2.png");
	stone3=loadImage("/home/ll18/Documents/GAME1/images/stone3.png");
	stone4=loadImage("/home/ll18/Documents/GAME1/images/stone4.png");
	truck=loadImage("/home/ll18/Documents/GAME1/images/truck.png");

}
function draw(){
	background(bg);
  image(truck,20,400,150,150);
	image(stone1,stone1xpos,stone1ypos,50,50);
	stone1xpos=stone1xpos+stone1xspeed;
	stone1ypos=stone1ypos+stone1yspeed;
	if (stone1xpos>=1000 ||stone1xpos<=0){
			stone1xspeed*=-1;
	}
	
	if (stone1ypos>=500 ||stone1ypos<=0){
			stone1yspeed*=-1;
	}
	image(stone2,stone2xpos,stone2ypos,50,50);
	stone2xpos=stone2xpos+stone2xspeed;
	stone2ypos=stone2ypos+stone2yspeed;
	if (stone2xpos>=1000 ||stone2xpos<=0){
			stone2xspeed*=-1;
	}
	
	if (stone2ypos>=500 ||stone2ypos<=0){
			stone2yspeed*=-1;
	}
	image(stone3,stone3xpos,stone3ypos,50,50);
	stone3xpos=stone3xpos+stone3xspeed;
	stone3ypos=stone3ypos+stone3yspeed;
	if (stone3xpos>=1000 ||stone3xpos<=0){
			stone3xspeed*=-1;
	}
	
	if (stone3ypos>=500 ||stone3ypos<=0){
			stone3yspeed*=-1;
	}
	image(stone4,stone4xpos,stone4ypos,50,50);
	stone4xpos=stone4xpos+stone4xspeed;
	stone4ypos=stone4ypos+stone4yspeed;
	if (stone4xpos>=1000 ||stone4xpos<=0){
			stone4xspeed*=-1;
	}
	
	if (stone4ypos>=500 ||stone4ypos<=0){
			stone4yspeed*=-1;
	}	
}

