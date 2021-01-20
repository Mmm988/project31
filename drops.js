class Drop {
  constructor(x, y, radius) {
    var options = {
        'restitution':0,
        'friction':0.1,
        'isStatic': false
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill("lightBlue");
      ellipse(0,0,this.radius,this.radius);
      if(this.body.position.y > height){
       Matter.Body.setPosition(this.body,{x:random(0,500),y:0})
      }
      pop();
  }
};
