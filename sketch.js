var bg, bg2;

function preload(){
  bg = loadImage('images/THEFINALIMGBG.png');

}
function setup() {

  createCanvas(1200,310);  
 
   bg2 = createSprite(300,150,1200,800);
   bg2.addImage(bg); 
   bg2.scale = 0.142;
}

function draw(){
  background("red");
  
  drawSprites();
  
}