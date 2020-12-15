class Plinko{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :1,
            friction :0,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var plinkoPos=this.body.position;	
		push()
		translate(plinkoPos.x, plinkoPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill("white")
		ellipseMode(RADIUS);
		ellipse(0,0,this.r*2, this.r*2)
		pop()
 }
}