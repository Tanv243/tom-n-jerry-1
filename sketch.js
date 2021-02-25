var garden,gardenImg;
var mouse,mouseImg1,mouseImgOver1;
var cat,catImg1,catImg4,catImg2,catImgOver1;
function preload() {
    //load the images here
  gardenImg=loadImage("images/garden.png");
  mouseImg1=loadImage("images/mouse1.png");
  catImg1=loadImage("images/cat1.png");
  catImg4=loadAnimation("images/cat2.png","images/cat3.png");
  catImgOver1=loadImage("images/cat4.png");
  mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
  mouseImgOver1=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   garden=createSprite(500,350);
   garden.addImage(gardenImg);
   
 
   mouse=createSprite(200,540,10,10);
   mouse.addImage(mouseImg1);
   mouse.scale=0.10;

   cat=createSprite(800,560,20,20);
   cat.addImage(catImg1);
   cat.scale=0.10;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
     if(keyDown("left_arrow")) {
      cat.velocityX=-5;
      cat.addAnimation("catRunning",catImg4);
      cat.changeAnimation("catRunning");

      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
    }

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
      cat.velocityX=0;
      cat.addAnimation("catOver",catImgOver1);
      cat.changeAnimation("catOver");

      mouse.addAnimation("mouseOver",mouseImgOver1);
      mouse.changeAnimation("mouseOver");
      mouse.x=114;
    
    }
    drawSprites();
    
}


function keyPressed(){

  //For moving and changing animation write code here
  
 

}
