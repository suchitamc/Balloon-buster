var background, backgroundImage, invisibleline;
var bow, bowImage, arrow, arrowGroup, arrowImage;
var balloons, redballoonGroup, blueballoonGroup, greenballoonGroup, pinkballoonGroup;
var score;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var deaths;
function preload(){
 //load your images here
  backgroundImage = loadImage("background3.png");
  redballoon = loadImage("redballoon.png");
  blueballoon = loadImage("blueballoon.png");
  greenballoon = loadImage("greenballoon.png");
  pinkballoon = loadImage("pinkballoon.png");
  bowImage = loadImage("bow.png");
  arrowImage = loadImage("arrow.png");
}
  
  function setup(){
  createCanvas(600, 600);
  
  //create a playground
    
   background = createSprite(300,250,600,20);
   background.addImage(backgroundImage);
   background.x = background.width/2;
   background.scale = 1.75;
    
   invisibleline = createSprite(550,300,10,600);
   invisibleline.visible = false;
   bow = createSprite(550,40,20,20);
   bow.addImage(bowImage);
    
   score = 0;
   deaths = 0;
   redballoonGroup = new Group();
   blueballoonGroup = new Group();
   greenballoonGroup = new Group();
   pinkballoonGroup = new Group();
   arrowGroup = new Group();
  } 
    
    
  
   
  function createArrow(){
    var arrow = createArrow();
    arrow.velocityX = -6;
    arrow.scale = 0.3;
    return arrow;
  }

  


function draw() {
  
  if (gameState === PLAY){
     background.velocityX = -4;   
     spawnBalloons();
     if (keyDown("space")){
       arrow = createSprite(460,100,5,10);
       arrow.addImage(arrowImage);
       arrow.velocityX = -6;
       arrow.scale = 0.3;
       arrow.y = bow.y;
       arrow.lifetime = 120;
       arrowGroup.add(arrow);
       
       if(arrowGroup.isTouching(redballoonGroup)){
         redballoonGroup.destroyEach();
         arrowGroup.destroyEach();
         score = score+5;
       }
        if(arrowGroup.isTouching(blueballoonGroup)){
         blueballoonGroup.destroyEach();
         arrowGroup.destroyEach();
         score = score+1;
       }
        if(arrowGroup.isTouching(greenballoonGroup)){
         greenballoonGroup.destroyEach();
         arrowGroup.destroyEach();
         score = score+1;
       }
        if(arrowGroup.isTouching(pinkballoonGroup)){
         pinkballoonGroup.destroyEach();
         arrowGroup.destroyEach();
         score = score+2;
       }
       if (redballoonGroup.isTouching(invisibleline)){
         deaths = deaths+1;
       }
        if (blueballoonGroup.isTouching(invisibleline)){
         deaths = deaths+1;
       }
        if (greenballoonGroup.isTouching(invisibleline)){
         deaths = deaths+1;
       }
        if (pinkballoonGroup.isTouching(invisibleline)){
         deaths = deaths+1;
       }
       
}else if(gameState === END){
  background.velocityX = 0;
  redballoonGroup.setVelocityXEach(0);
  blueballoonGroup.setVelocityXEach(0);
  greenballoonGroup.setVelocityXEach(0);
  pinkballoonGroup.setVelocityXEach(0);
  arrowGroup.setVelocityXEach(0);
  
}
  }
  if (background.x<0){
    background.x = background.width/2;
    
  }
  
 bow.y = mouseY;
    

   
   
   
   drawSprites();
   fill("black");
   textSize(20);
   text("Score: "+score,500,50);
   //fill("red");
   //textSize(10);
   //text("Deaths: "+deaths, 290,50);
   
   if (deaths === 5){
         fill("red");
         textSize(20);
         text("GAME OVER",250,300);
         gameState = END;
       }
  
   
}

  function spawnBalloons(){
   if(frameCount % 100 === 0){
     balloons = createSprite(60,250,20,20);
     balloons.velocityX = 3;
     balloons.y = Math.round(random(50,440));
     
     
      
     var rand;
     rand = Math.round(random(1,4));
  switch(rand){
        case 1:  balloons.addImage(redballoon); 
          balloons.scale = 0.1;
          redballoonGroup.add(balloons);
          break;
        case 2: balloons.addImage(blueballoon); 
          balloons.scale = 0.1;
          blueballoonGroup.add(balloons);
          break;
        case 3:  balloons.addImage(greenballoon);
          balloons.scale = 0.09;
          greenballoonGroup.add(balloons);
          break;
        case 4:  balloons.addImage(pinkballoon); 
          balloons.scale = 0.99;
          pinkballoonGroup.add(balloons);
          break;
      }
     balloons.lifetime = 180; 
    
   } 
    
  }
 
function returnarrow(){
      
      arrow = createSprite(460,100,5,10);
      arrow.addImage(arrowImage);
      arrowGroup.add(arrow);
      return arrow;    
      
   }
 