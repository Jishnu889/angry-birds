class Pig
{
    
    constructor(a,b)
    {
    var options={
    restitution:0.8,
    friction:0.3,
    density:1
    }
    
    this.x=a;
    this.y=b;
    this.width=50;
    this.height=50;
    
    this.body=Bodies.rectangle(a,b,50,50,options)
    this.image=loadImage("sprites/enemy.png")
    World.add(world,this.body)
    }
    
    
    display()
    {
        var pigPosition=this.body.position
        //birdPosition.x=mouseX,birdPosition.y=mouseY
    var angle=this.body.angle 
    push()
    fill("green")
    translate(pigPosition.x,pigPosition.y)
    rotate(angle)
    //to maintain the order of the natural properties
    image(this.image,0,0,this.width,this.height)
    pop()
    }
    
    }