var fixedbox,movingbox;

function setup() {
  createCanvas(800,800);
  fixedbox = createSprite(400, 200, 50, 50);
  fixedbox.shapeColor = "red";
  movingbox = createSprite(400, 700, 80, 30);
  movingbox.shapeColor = "red";
 // movingbox.velocityX = -5;
//  fixedbox.velocityX = 5;
movingbox.velocityY = -5;
fixedbox.velocityY =  5;
}

function draw() {

  background(0);  
 // movingbox.x = mouseX;
  //movingbox.y = mouseY;
 
  if(movingbox.x - fixedbox.x < fixedbox.width/2 + movingbox.width/2
    && fixedbox.x - movingbox.x < fixedbox.width/2 + movingbox.width/2
    && movingbox.y - fixedbox.y < fixedbox.height/2 + movingbox.height/2
    && fixedbox.y - movingbox.y < fixedbox.height/2 + movingbox.height/2){
      fixedbox.shapeColor = "green";
      movingbox.shapeColor = "green";
    }
    else {
      fixedbox.shapeColor = "red";
      movingbox.shapeColor = "red";
    }
    if(movingbox.x - fixedbox.x < fixedbox.width/2 + movingbox.width/2
      && fixedbox.x - movingbox.x < fixedbox.width/2 + movingbox.width/2){
       movingbox.velocityX = movingbox.velocityX * (-1);
       fixedbox.velocityX = fixedbox.velocityX * (-1);
       
      }
      if (movingbox.y - fixedbox.y < fixedbox.height/2 + movingbox.height/2
      && fixedbox.y - movingbox.y < fixedbox.height/2 + movingbox.height/2){
        movingbox.velocityY = movingbox.velocityY * (-1);
       fixedbox.velocityY = fixedbox.velocityY * (-1);
      }
     


  drawSprites();

}