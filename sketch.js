var ball,img,paddle,score = 0,lives = 3;

function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}

function setup() {
  createCanvas(400, 400);
  ball=createSprite(25,200,20,20);
  ball.addImage (ballimg); 
  paddle=createSprite(375,200,20,100);
  paddle.addImage(paddleimg);
}

function draw() {
  background(205,153,0);
  
  textSize(15);
  text("SCORE:"+ score,250,25)
  text("LIVES:"+ lives,100,25)
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  
  //Bounce Off top and bottom edges
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  //bounceoff paddle
  
  
  paddle.bounceOff(edges[2]);
  paddle.bounceOff(edges[3]);
  
  if(ball.x>=400) {
     ball.x = 25;
     ball.y = 200;
     paddle.x = 375;
     paddle.y = 200;
     ball.velocityX = 0;
     ball.velocityY = 0;
     paddle.velocityY = 0;
     lives = lives - 1;
  }   
  
 if(keyDown(UP_ARROW)){
    paddle.velocityY = -5;
  }
  
  if(keyDown(DOWN_ARROW)){
     paddle.velocityY = 5;
  }
  
  if(keyWentDown("space"))  {
     ball.velocityX = 5;
     ball.velocityY = 6;
  }
  
  if(ball.isTouching(paddle)){
     ball.bounceOff(paddle);
     score = score + 1;
  }
  
  if(lives === 0){
     paddle.velocityY = 0;
     paddle.velocityY = 0;
     paddle.velocityX = 0;
     fill("red");
     textSize(30);
     text("GAME OVER",100,200);
  }
    
  drawSprites();
}



