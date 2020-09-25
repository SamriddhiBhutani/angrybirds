class Bird {
    constructor (x,y) {
        var option = {
        "restitution": 0.3,
        "friction": 1,
        "density": 1.5
        }
        this.body = Bodies.rectangle(x,y,70,70,option);
        this.width = 70;
        this.height = 70;
        World.add(world,this.body);
        
        }
        display (){
            var pos = this.body.position;
            pos.y = mouseY;
            pos.x = mouseX;
            var angle = this.body.angle;
            push ();
            translate(pos.x,pos.y);
            rotate (angle);
            angleMode(RADIUS);
            rectMode(CENTER);
            fill("orange");
            rect(pos.x,pos.y,this.width,this.height);
            pop ();        
        }
}