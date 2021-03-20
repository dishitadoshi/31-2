const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var drop = [];
var MaxDrop =100;
 var umbrella;
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

