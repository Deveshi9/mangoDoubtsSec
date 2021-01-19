class Mango{
    constructor(x,y,r){
        var options = {
            restitution : 1,
            density:1.5,
            friction:0.5,
            isStatic:true
                  
        }
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        this.x=x
        this.y=y
        this.r=r
        World.add(world,this.body)
        this.mango = loadImage("mango.png")
    }
    display(){
        var pos = this.body.position
        push ()
      translate (pos.x,pos.y)
    rotate (this.body.angle)
    imageMode(CENTER)
    image(this.mango,0,0,this.r*2,this.r*2);
    pop ()
}

}