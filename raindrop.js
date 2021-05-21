class raindrop {
    constructor(x,y,diameter){
    var options={
                 isStatic:false,
                 restitution:0.1,
                friction:0.0001
                
    }
    this.body = Bodies.circle(x,y,diameter/2,options)
    this.diameter=diameter;
    
    //this.image=loadImage("paper.png");
    World.add(world,this.body)
    }
    updateY(){
    if(this.body.position.y>700){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
    }
    }
    display(){
     var angle=this.body.angle
    // push();
     //translate(this.body.position.x,this.body.position.y);
    // rotate(angle);
     ellipseMode(CENTER);
     stroke("lightblue");
     fill("blue");
     ellipse(this.body.position.x,this.body.position.y,this.diameter,this.diameter*2);
    // pop();
     }
    }
    