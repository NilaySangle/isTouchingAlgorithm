var fr;
var mr;

function setup() {
  createCanvas(800,400);
  fr = createSprite(400, 200, 50, 80);
  fr.shapeColor = "blue";
  mr = createSprite(200, 200, 80, 50);
  mr.shapeColor = "blue";
  
}

function draw() {
  background("yellow");

mr.x = World.mouseX;
mr.y = World.mouseY;

if(mr.x - fr.x < mr.width/2 + fr.width/2 && 
  fr.x - mr.x < mr.width/2 + fr.width/2  && 
  mr.y - fr.y < mr.width/2 + fr.width/2 && 
  fr.y - mr.y < mr.width/2 + fr.width/2){

  mr.shapeColor = "red";
  fr.shapeColor = "red";
}
else{
  mr.shapeColor = "blue";
  fr.shapeColor = "blue";
}


  drawSprites();  
}