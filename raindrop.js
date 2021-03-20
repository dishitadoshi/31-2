class Drop{
    constructor(x,y,radius){
      var  options = {
       'friction' : 0.001
       
}
        
        this.body = Bodies.circle(x,y,10,options);
        this.radius =10;
        World.add(world,this.body);
}
 raindrop(){
    if(this.body.position.y > 600){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
    }
    }
    display(){ 
        var pos = this.body.position
        fill("blue");
        ellipseMode(CENTER); 
        ellipse(this.body.position.x,this.body.position.y,this.diameter,this.diameter);
        }
    
}