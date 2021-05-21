class umbrella
{
	constructor(x,y)
	{
		var options={
			isStatic:true		
			}
	//	this.x=x;
	//	this.y=y;
	//	this.w=w
	//	this.h=h
        this.image=loadImage("images/Walking Frame/walking_1.png")
        this.umbrella=Bodies.circle(x,y,50,options);
        this.radius=50
		//this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.umbrella);

	}
	display()
	{
		//	var umbrePos=this.body.position;		
			//push()
			//translate(groundPos.x, groundPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill("black")
			image(this.image,this.umbrella.position.x,this.umbrella.position.y+60,300,300);
			//pop()
			
	}

}