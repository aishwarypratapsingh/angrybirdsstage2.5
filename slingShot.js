class SlingShot{
   constructor(bodyA,bodyB){        //(X,Y)  
    var options={
        bodyA:bodyA,   //bodyA:X
        bodyB:bodyB,
       // pointB: {x:200,y:100},
        length:20,
        stiffness:0.10,
    }
    
    this.chain=Constraint.create(options);
    World.add(world,this.chain);

}
    display(){
        
        strokeWeight(4);  //thickness
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
        //line(x1,y1,x2,y2);
        //line(bird.body.position.x,bird.body.position.y,200,100);


    }


   


}