class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.slingimage=loadImage("./sprites/sling1.png")
        this.slingimage2=loadImage("./sprites/sling2.png")
        this.slingimage3=loadImage("./sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.slingimage,200,25)
        image(this.slingimage2,170,25)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(55,27,10)
            strokeWeight(4);
        if (pointA.x>250){
            line(pointA.x+20, pointA.y-5, pointB.x-15, pointB.y-40);
            line(pointA.x+20, pointA.y-5, pointB.x+20, pointB.y-40);
            image(this.slingimage3,pointA.x+20,pointA.y-5)
        }
        else{
            line(pointA.x-15, pointA.y-5, pointB.x-15, pointB.y-40);
            line(pointA.x-15, pointA.y-5, pointB.x+20, pointB.y-40);
            image(this.slingimage3,pointA.x-20,pointA.y-5)
        }

           
            
            
            
        }
       
    }
    
}