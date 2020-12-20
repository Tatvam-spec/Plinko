const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




function preload() {
}

var divisionHeight = 300;

var particles = [];
var plinko = [];
var divisions = [];

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
   // Top level
    block = new Block(390,155,30,40);
   // Second level
    block2 = new Block(420,195,30,40);
    block3 = new Block(390, 195, 30, 40);
    block4 = new Block(360,195,30, 40);
  
   
   
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    block.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
     
}

for(var j = 0; j < particles.length; j++){
    particles[j].diplay();
}
for(var k = 0; k< divisions.length; k++){
    divisions[k].display();
}

