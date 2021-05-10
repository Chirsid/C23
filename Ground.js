class Ground{
    constructor(){
        var ground_options ={
            isStatic: true
        }
    
       this.body = Bodies.rectangle(600,580,1200,20,ground_options)
       World.add(world,this.body)
    }





    display(){
        var posy = this.body.position
        rectMode(CENTER)
        rect(posy.x,posy.y,1200,20)

    }
}