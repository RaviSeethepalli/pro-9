var s1



function setup() {
  createCanvas(400,400);
  s1=createSprite(200,200,40,40)

}

function draw() 
{
  background("darkblue");
if(keyIsDown(UP_ARROW)){
s1.y=s1.y-3
}
if(keyIsDown(DOWN_ARROW)){
  s1.y=s1.y+3
  }
  if(keyIsDown(LEFT_ARROW)){
    s1.x=s1.x-3
    }
    if(keyIsDown(RIGHT_ARROW)){
      s1.x=s1.x+3
      }
  drawSprites();
}




