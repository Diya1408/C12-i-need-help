var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  grassImg = loadImage("grass.png");
  OLeafImg = loadImage("orangeLeaf.png");
  RLeafImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

//preload Images
apple=createSprite(RandomSource(10,490),0);
apple.addImage(appleImg);
apple.scale =0.09;

grass=createSprite(RandomSource(10,490),0);
grass.addImage(grass.png);
grass.scale =0.09;

leaf1=createSprite(RandomSource(10,490),0);
leaf1.addImage(OLeafImg);
leaf1.scale =0.09;

leaf2=createSprite(RandomSource(10,490),0);
leaf2.addImage(RLeafImg);
leaf2.scale =0.09;
}


function draw() {
  background(0);
   
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
 
  rabbit.x=mouseX;
}