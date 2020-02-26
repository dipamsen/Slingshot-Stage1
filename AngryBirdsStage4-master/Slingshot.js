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
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x>180){
                strokeWeight(6);
            } else {
                strokeWeight(4);
            }
            stroke(48,22,8);
            line(pointA.x-20, pointA.y+10, pointB.x, pointB.y);
            line(pointA.x-20,pointA.y+10, 200,   pointB.y);
            
        }

    }
    
}