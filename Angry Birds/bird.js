class Bird
{
    
    constructor(a,b)
    {
    var options={
   // isStatic:true,
    restitution:0.5,
    friction:1.0,
    density:1.5
    }
    
    this.x=a;
    this.y=b;
    this.width=50;
    this.height=50;
    
    this.body=Bodies.rectangle(a,b,50,50,options)
    this.image=loadImage("sprites/bird.png")
    World.add(world,this.body)
    }
    
    
    display()
    {
        var birdPosition=this.body.position
        birdPosition.x=mouseX,birdPosition.y=mouseY
        var angle=this.body.angle 
    push()
    fill("red")
    translate(birdPosition.x,birdPosition.y)
    rotate(angle)
    //to maintain the order of the natural properties
    image(this.image,0,0,this.width,this.height)
    pop()
    }
    
    }