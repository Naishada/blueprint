
// namespacing
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world
var ground;
var box2;
var box1;

//restitution

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world

  box1 = new Box(200,100,20,40);
  box2 = new Box(220,50,60,30);
  ground = new Ground(200,390,400,25);
}

function draw() {
  background("pink"); 
  Engine.update(engine) 

  box1.display();
  ground.display();
  box2.display();
  drawSprites();
}