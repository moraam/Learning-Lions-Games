//have a global variable for the image
var bg;
var sp;
var xPos=15;
var yPos=15;
var x=20,y=600;

function setup(){
	createCanvas(800,650);
	//load the sprite image
	bg=loadImage("4.png");
	sp=loadImage("2.png");
		
}
function draw() {
	//draws our bg
	background(bg);

	var oldx=x;
	var oldy=y;	

	if (keyIsDown(LEFT_ARROW)) {
		x -=2;
	}
	if (keyIsDown(RIGHT_ARROW)) {
		x +=2;
	}
	if (keyIsDown(UP_ARROW)) {
		y -=2;
	}
	if (keyIsDown(DOWN_ARROW)) {
		y +=2
;
	}
	
	var color = get(x,y);
	var colorright = get(x,y);
	var colordown = get(x,y);
	
	if (color[2]==80){
		x=oldx;
		y=oldy;	
	}

	if (colorright[2]==80){
		x=oldx;
		y=oldy;	
	}

	if (colordown[2]==80){
		x=oldx;
		y=oldy;	
	}

	if (color[0]==80 && color[1]==80 && color[2]==63) {
	objectiveReached=true;
	}
	else objectiveReached=false;
	/*if(objectiveReached) {
		fill(Math.random() *255, Math.random() *255, Math.random() *255)
		rect(500,100,200,20);
		text("you won",490,90);
	}*/

	

	rect(0,5,150,20);
	text (colordown,20,20);	
	
	
	
	
	image(sp,x,y,15,15);
	//console.log(color);
}
