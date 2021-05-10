const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1,box2;
var ground1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    //making object
    box1=new Box(150,200,100,70);
    box2=new Box(100,300,100,120);
   
    ground1 = new Ground()
    
}

function draw(){
    Engine.update(engine);
    background(0);

    ground1.display()

    box1.display();
    box2.display();
}