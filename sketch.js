const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

//declaring man and umbrella
var man;

//declaring raindrop array
var Rain_Drop=[];
var MaxDrop=100
var Thunder,ThunderImage;

function preload(){
    ThunderImage=loadAnimation("1.png","2.png","3.png","4.png");
}

function setup(){
    createCanvas(400, 700);
    engine = Engine.create();
	world = engine.world;
  
for(var i=0;i<MaxDrop;i++){
Rain_Drop.push(new raindrop(random(0,400),random(0,400),5));

}

man=new umbrella(150,500);

Thunder=createSprite(200,50,30,10);
Thunder.addAnimation("thunder",ThunderImage);
Thunder.scale=0.3;
Thunder.visible=false
 
	Engine.run(engine);
}

function draw(){
background("black");

man.display();

if(frameCount%120>=0&&frameCount%120<=20){
Thunder.visible=true;

}
else{
Thunder.visible=false;
}

for(var i=0;i<MaxDrop;i++){
    Rain_Drop[i].display();
    Rain_Drop[i].updateY();
}

drawSprites();
}   


