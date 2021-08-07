
  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var log1
var log2
var log3
var log4
var box
var box2
var box3
var box4
var box5
var bird
var pig
var pig2
var ground

function setup(){
var canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;
ground=new Ground(0,385,1200,30);
bird=new Bird(100,100)
pig=new Pig(810,350,60,60)
pig2=new Pig(810,220,60,60)
log1=new Smallstand(810,260,300,PI/2)
log2=new Smallstand(810,180,300,PI/2)
log3=new Smallstand(760,120,150,-PI/7)
log4=new Smallstand(870,120,150,-PI/7)
box=new Box(700,320,70,70)
box2=new Box(920,320,70,70)
box3=new Box(700,240,70,70)
box4=new Box(920,240,70,70)
box5=new Box(810,160,70,70)

    
}

function draw(){
    background(0);
    Engine.update(engine);
    bird.display();
    pig.display();
    pig2.display();
    ground.display();
    box.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    
    fill("white");
    text(mouseX+","+mouseY,mouseX,mouseY)
}

