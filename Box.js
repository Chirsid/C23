class Box{
//properties

 
constructor(x,y,width,height){
    var b={
        restitiution:1,
        friction:0
       }
    this.body=Bodies.rectangle(x,y,width,height,b);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
}







//functions
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle)
    rectMode(CENTER);
    fill("red");
    rect(0,0,this.width,this.height);
    pop()
}


}