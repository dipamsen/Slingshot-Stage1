const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
  
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    var inc = 40;
    var basicX = 800,   basicY = 540;
    ground = new Ground(600,height,1200,20);

    box1 = new Box(basicX+(inc*-1),basicY-inc,40,40);
    box2 = new Box(basicX+(inc* 1),basicY-inc,40,40);
    box3 = new Box(basicX+(inc*-1),basicY,40,40);
    box4 = new Box(basicX+(inc* 1),basicY,40,40);
    box5 = new Box(basicX+(inc*0),basicY,40,40);
    box6 = new Box(basicX+(inc*0),basicY-inc,40,40);
    box7 = new Box(basicX+(inc* 2),basicY,40,40);
    box8 = new Box(basicX+(inc*-2),basicY,40,40);
    box9 = new Box(basicX,basicY-2*(inc),40,40);

    box1a = new Box(basicX+(inc*-6),basicY-inc-300,40,40);
    box2a = new Box(basicX+(inc*-4),basicY-inc-300,40,40);
    box3a = new Box(basicX+(inc*-6),basicY-300,40,40);
    box4a = new Box(basicX+(inc*-4),basicY-300,40,40);
    box5a = new Box(basicX+(inc*-5),basicY-300,40,40);
    box6a = new Box(basicX+(inc*-5),basicY-inc-300,40,40);
    box7a = new Box(basicX+(inc* -3),basicY-300,40,40);
    box8a = new Box(basicX+(inc*-7),basicY-300,40,40);
    box9a = new Box(basicX+(inc*-5),basicY-2*(inc)-300,40,40);
    bird = new Bird(200,400);
    p2 = new Ground(600,300,250,20);
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:400});
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();

    box3.display();
    box4.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();    box1a.display();
    box2a.display();

    box3a.display();
    box4a.display();

    box5a.display();
    box6a.display();
    box7a.display();
    box8a.display();
    box9a.display();
    bird.display();
    p2.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}