class Chain {
    constructor(objectA, objectB) {
        var options = {
            bodyA: objectA,
            bodyB: objectB,
            length: 20,
            stiffness: 0.05
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display() {
        push();
        stroke("red");
        strokeWeight(15);
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);
        pop();
    }
}