class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
  }

  display() {
    /*if(mouseDragged){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
    }  */  
    fill("blue");
    ellipse(this.body.position.x,this.body.position.y,50,50);
  }
}
