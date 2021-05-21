var fixedRect, movingRect;
var box;

function setup() 
{
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  box=createSprite(100,100,80,80)
  box.shapeColor="blue"
}

function draw()
{
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,box)){
    movingRect.shapeColor = "red";
    box.shapeColor = "red";
  }
  else
  {
    movingRect.shapeColor = "green";
    box.shapeColor = "blue";
  }

  drawSprites();
}

function isTouching(object1,object2)
{
  if ( object1.x - object2.x < object2.width/2  + object1.width/2
    && object2.x - object1.x < object2.width/2  + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2)
    {
  
      return true;
    }
else 
    {
      return false
    }
}

