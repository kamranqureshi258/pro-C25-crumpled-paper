class Paper {
    constructor(x,y,radius){
        var options={
            isStatic:false,
            density:1.2,
            restitution:0.3,
            friction:0.5	
			}
		this.x=x;
		this.y=y;
		this.body=Bodies.circle(x, y, radius , options);
        this.image=loadImage("paper.png");
 		World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle; 
       
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill('red')
        imageMode(RADIUS);
        image(this.image,0, 0,100,100);
        pop();
      };
    };
    