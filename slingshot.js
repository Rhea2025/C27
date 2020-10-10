class Slingshot {
    constructor(objectA, pointB) {
        var options = {
            bodyA: objectA,
            pointB: pointB,
            length: 20,
            stiffness: 0.05
        }
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
        console.log(objectA);
        console.log(pointB);
    }
    display() {
        if(this.slingshot.bodyA != null){
            push();
            stroke("red");
            strokeWeight(10);
            line(this.slingshot.bodyA.position.x, this.slingshot.bodyA.position.y, this.slingshot.pointB.x, this.slingshot.pointB.y);
            pop();
        }
    }

    fly(){
        this.slingshot.bodyA = null;
    }
}