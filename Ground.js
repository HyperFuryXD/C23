class Ground{

    constructor(){
   
        var option = {
   isStatic:true    
   }  

   this.body = Bodies.rectangle(200,380,400,20,option);
   this.width = 400;
   this.height = 20;
   World.add(world,this.body);
    }

  display(){
var position = this.body.position;
rectMode(CENTER);
rect(position.x,position.y,this.width,this.height);
  }  
}