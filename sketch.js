
var trex ,trex_running;
var ground, invisibleGround, groundImage;

function preload(){
  //cargar animaciones
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

  //agregar la imagen del suelo
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("runing", trex_running);
  
 //agregar tamaño y posicion al trex
 trex.scale = 0.5;
 trex.x = 50;

 //crear el sprite del suelo
 ground = createSprite(200, 180, 400, 20);
 
 //hacer que el suelo se coloque simetricamente en la pantalla
 ground.addImage("ground", groundImage);
 ground.x = ground.width/2;
 ground.velocityX = -4;

 //crear sprite del suelo invisible
 invisibleGround = createSprite(200, 190, 400, 10);
invisibleGround.visible = false;
}

function draw(){
  background(220);

  //velocidad del suelo
  ground.velocityX = -2;
  console.log(ground.x);

  //hacer que no se caiga el trex
  if(ground.x < 0){
    ground.x = ground.width/2;
  }

  //hacer que el trex salte al presionar
  if(keyDown("space") && trex.y >=100){
    //hacer que vuelva al suelo
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8;  

   //evitar que el trex caiga
   trex.collide(invisibleGround);
  drawSprites();
}
