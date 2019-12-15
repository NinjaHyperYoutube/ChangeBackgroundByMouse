var elispse;

function setup() {
  createCanvas(510,510);
  fill("orange")
  elispse = ellipse(mouseX,mouseY,20);
}

function draw() {
  background(mouseX/2,mouseY/2,(mouseX+mouseY)/2);  
  elispse = ellipse(mouseX+6.5,mouseY+6.5,22.5);
  drawSprites();
}