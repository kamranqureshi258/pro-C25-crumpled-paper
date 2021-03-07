
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;

var paperobj;
var dustbinimage,dustbin2;

function preload(){
	dustbinimage=loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	dustbin2=createSprite(1200,530,50,50)
	dustbin2.addImage(dustbinimage);
	dustbin2.scale=0.7
	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	
	paperobj= new Paper(200,200,4);
	
	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(230);

  drawSprites();
  paperobj.display();
  groundObject.display();
  dustbinObj.display();
	
}

function keyPressed() 
{ if (keyCode === UP_ARROW) { 
	Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:4,y:-3});
 }
}


