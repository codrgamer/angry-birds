class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:2,
            length:10
        }
      this.sling=  Constraint.create(options)
      this.pointB=pointB
      World.add(world,this.sling); 
    }
    display(){
        var pointA=this.sling.bodyA.position
        var pointB=this.pointB
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
//