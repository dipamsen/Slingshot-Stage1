class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.color = 'rgb(' + (Math.round(Math.random() * 256)) + ',' + (Math.round(Math.random() * 256)) + ',' + (Math.round(Math.random() * 256)) + ')';

  }
  display(){
    stroke("black");
    
    strokeWeight(1.5);
    fill(this.color);
    rect(this.body.position.x,this.body.position.y,40,40);
  }
};
