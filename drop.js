class CreateDrop{
    constructor(x,y){
        var options={
            friction:0.001,
            restitution:0.1
        }
        this.rain=Bodies.circle(x,y,3,options);
        this.r=3;
        World.add(world,this.rain);

    }
    updateY(){
        if(this.rain.position.y>height){
            Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }

    }
    display(){
        var pos=this.rain.position;
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
    }
    
}