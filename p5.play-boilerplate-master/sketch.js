var player1, player2;
var island, bullet, ground;
var player2Img,islandImage, bg, bgImage;

function preload() {
  
  player2Img = loadImage("tank.jpg")
  bg = loadImage("bg.jpg")
  islandImage = loadImage("islandImage.jpg")
}

function setup() {
  createCanvas(600,800);
  player1 = createSprite(280,700,20,20);
  player1.shapeColor = "yellow";

  player2 = createSprite(280,50,20,20);
  player2.shapeColor = "blue"
  
  island = createSprite(200,200,50,50);
  island.addImage(islandImage);
  island.scale = 0.25

  bgImage = createSprite(300,300,600,800);
  bgImage.addImage(bg);
  bgImage.velocityY = 1;  

}

function draw() {
  background("blue");

  drawSprites();
}

function islands() {
  //write code here to spawn the doors in the tower
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    
    door.x = Math.round(random(120,400));
    climber.x = door.x;
    invisibleBlock.x = door.x;
    
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;
    
    ghost.depth = door.depth;
    ghost.depth +=1;
   
    //assign lifetime to the variable
    door.lifetime = 800;
    climber.lifetime = 800;
    invisibleBlock.lifetime = 800;

    
    //add each door to the group
    doorsGroup.add(door);
    invisibleBlock.debug = true;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
}

