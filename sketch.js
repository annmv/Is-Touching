var fixed, moving;

function setup() {
  createCanvas(800,400);
  fixed = createSprite (400,200,50,50);
  fixed.shapeColor = "red";
  moving = createSprite (200,200,50,50);
  moving.shapeColor = "blue";
  fixed1 = createSprite (700,100,50,50);
  fixed1.shapeColor = "purple";
  moving1 = createSprite (100,100,50,50);
  moving1.shapeColor = "orange";

  fixed1.velocityX = -2;
  moving1.velocityX = +3;
}

function draw() {
  background(255,255,255);  
  
  moving.y = mouseY;
  moving.x = mouseX;

  if(moving.x - fixed.x < moving.width/2 + fixed.width/2 && 
    fixed.x - moving.x < moving.width/2 + fixed.width/2 &&
    moving.y - fixed.y < moving.height/2 + fixed.height/2 &&
    fixed.y - moving.y < moving.height/2 + fixed.height/2 ) {
      fixed.shapeColor = "green";
      moving.shapeColor = "yellow";
  }
   else {
    fixed.shapeColor = "red";
    moving.shapeColor = "blue";
   }
  
   if(moving1.x - fixed1.x < moving1.width/2 + fixed1.width/2 && 
    fixed1.x - moving1.x < moving1.width/2 + fixed1.width/2 &&
    moving1.y - fixed1.y < moving1.height/2 + fixed1.height/2 &&
    fixed1.y - moving1.y < moving1.height/2 + fixed1.height/2 ) {
      moving1.velocityX = -1 * moving1.velocityX;
      fixed1.velocityX = -1 * fixed1.velocityX;
    }


  drawSprites();
  }