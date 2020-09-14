class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    fill(20,30,50);
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
