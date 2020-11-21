var sprite1;
var sprite2;
var sprite3;
var sprite4;



function setup() {

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  sprite1=createSprite(100,50,20,20);
  sprite2=createSprite(130,50,20,20);
  sprite3=createSprite(160,50,20,20);
  sprite4=createSprite(190,50,20,20);
  database = firebase.database();
  
}

function draw() {
  background(255,255,255);  
  drawSprites();

}