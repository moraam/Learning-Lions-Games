var bg;
var sprite;
var sprite2;

function setup(){
    createCanvas(1200,600);
  bg=loadImage("images/b.jpg");
  sprite=loadImage("images/1.png");
  sprite2=loadImage("images/2.png");
  sprite3=loadImage("images/3.png");

} 
function draw(){
	background(bg);
	image(sprite,20,500,50,80);
	image(sprite2,70,500,50,80);
	image(sprite3,120,500,50,80);
}

	for (i=0;i<600;i+=70){
		var randomxpos = random(50,100);
		ellipse(i,randomxpos,20,20);
}