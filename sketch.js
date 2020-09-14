const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var circle;
var score= 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,300,500,20);
   // platform = new Ground(150, 305, 300, 170);

   circle = Bodies.circle(200,200,10);
   World.add(world, circle);

   box9 = new Pig(640,140);

    pig1 = new Pig(620,220);
    box2 = new Pig(680,240);
   // pig1 = new Pig(810, 350);
   // log1 = new Log(810,260,300, PI/2);

    pig3 = new Pig(640,240);
    box4 = new Pig(600,240);
   // pig3 = new Pig(700, 220);

   //log3 =  new Log(810,180,300, PI/2);

    box5 = new Pig(670,220);
    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:200});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);

    noStroke();
textSize(35);
fill("white");
text("Score: "+ score, width-300, 50);

ellipseMode(RADIUS);
ellipse(circle.position.x, circle.position.y, 20,20);

box2.display();
    box2.score();
    box9.display();
    box9.score();
    pig3.display();
    pig3.score();
    box4.display();
    box4.score();
   
    
    
    ground.display();
   // pig1.display();
    //log1.display();
    pig1.display();
    pig1.score();

   
   // pig3.display();
 //log3.display();

    box5.display();
    box5.score();
    
   // log4.display();
   // log5.display();

    bird.display();
   // platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}
async function getBackgroundImg(){

var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON= await response.json();
var datetime= responseJSON.datetime;
var hour= datetime.slice(11,13);

if(hour>= 06 && hour<=19){

    bg= "sprites/bg.png";

}
else {
    bg = "sprites/bg2.jpg";
}
backgroundImg = loadImage(bg);

}