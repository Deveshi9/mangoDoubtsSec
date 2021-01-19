class Tree {
    constructor(x,y) {
      var options = {
          isStatic:true
            }
            this.width=600;
            this.height=600;
     this.bottomBody=Bodies.rectangle(x,y,this.height,this.width,options)
        //  this.leftBody = Bodies.rectangle(x,y,this.width,this.height,options)
      ///this.rightBody = Bodies.rectangle(x,y,this.width,this.height,options)
      World.add(world,this.bottomBody);
     /// World.add(world,this.leftBody);
     // World.add(world,this.rightBody);
           this.image=loadImage("tree.png")
    }
    display(){
        var pos=this.bottomBody.position;
         imageMode(CENTER)
         fill("LightGreen")
       image(this.image,pos.x,pos.y,this.height,this.width)
    }
}