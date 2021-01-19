const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
const Constraint = Matter.Constraint

var engine,world;
var ground;
var tree,mango1,mango2,mango3;
function setup() {
  createCanvas(1200,600);
  engine=Engine.create();
  world=engine.world;

  ground = new Ground(600,590,1200,20);
  tree = new Tree(1000,300)
  mango1 = new Mango(1000,200,50)
  mango2 = new Mango(1100,100,50)
  mango3 = new Mango(980,300,50)
}

function draw() {
  Engine.update(engine)
  background("lightSkyBlue"); 
  ground.display() ;
 tree .display();
 mango1.display();
 mango2.display();
 mango3.display();
  
}