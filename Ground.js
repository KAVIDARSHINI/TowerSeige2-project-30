class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(450,390,900,20,ground_options)
          World.add(world,this.ground);
          this.image = loadImage("image.jpg");
    }
    display(){
        noStroke();
        //fill(188,67,67);
        imageMode(CENTER);
        image(this.image,this.ground.position.x,this.ground.position.y,900,20);
    }
}