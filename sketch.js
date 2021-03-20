const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var drop = [];
var MaxDrop =100;
 var umbrella;
var thunder;
function preload(){
    
}
function setup(){
    var canvas = createCanvas(700,600);
    engine = Engine.create();
    world = engine.world;
    umbrella = new Boy (350,300)
    //drop = new Drop(46,78,30);
    for(var i=0; i<MaxDrop; i++){
        drop.push(new Drop(random(0,400), random(0,400)));
    }
   rand = Math.round(random(1,4));
 if(frameCount%80===0){
  thuderCreatedFrame=frameCount;
  thunder = createSprite(random(10,370), random(10,30),10,10);
  switch(rand){
   case 1:thunder.addImage(thunder1);
    break;
   case 2: thunder.addImage(thunder2);
    break;
   default: break;
  }
  thunder.scale = random(0.3,0.6);
 }
}

function draw(){
    background("black");
    Engine.update(engine);
    umbrella.display();
    //drop.display();
    for(var i=0; i<MaxDrop; i++){
        drop[i].display();
        drop[i].raindrop();
    }
   
}   

