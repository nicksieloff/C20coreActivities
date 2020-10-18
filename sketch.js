//creating two rectangles

var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(200, 200, 50, 80);
  fixedRect.shapeColor= "crimson";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor= "crimson";
  
}
function draw() {
  background(255,255,255);  
  movingRect.x= World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x- fixedRect.x< fixedRect.width/2+ movingRect.width/2
    && fixedRect.x- movingRect.x< movingRect.width/2+ fixedRect.width/2
    && movingRect.y- fixedRect.y< fixedRect.height/2+movingRect.height/2
    && fixedRect.y- movingRect.y< movingRect.height/2+ fixedRect.height/2){
movingRect.shapeColor= "blue";
fixedRect.shapeColor= "blue";
  }
  
    else{
      movingRect.shapeColor= "crimson";
      fixedRect.shapeColor= "crimson";
    }
  
  drawSprites();
}