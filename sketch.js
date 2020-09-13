var fixedRect, movingRect;


function setup() {
  createCanvas(1200,800);
fixedRect =  createSprite(500, 100, 50, 80);
fixedRect.shapeColor = "green"
movingRect =  createSprite(500, 500, 80, 30);
movingRect.shapeColor = "green"
fixedRect.velocityY = 5;
movingRect.velocityY = -5;
}

function draw() {
  background(255,255,255); 
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  fixedRect.velocityY = fixedRect.velocityY*(-1);
movingRect.velocityY = movingRect.velocityY*(-1);

}
/*else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}*/

  //console.log(movingRect.x-fixedRect.x);
  console.log(movingRect.x)
  drawSprites();
}