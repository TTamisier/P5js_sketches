let bob;

class walker {
  constructor() {
    this.x = windowWidth/2;
    this.y = windowHeight/2
  }

  show() {
    stroke(0);
    point(this.x, this.y, 5);
  }

  step(){
    let r = random(10);
    let cf = floor(random(2));

    if(cf === 0){
      this.x += mouseX()
      this.y += mouseY()
    } else {
      if (r < 0.4){
        this.x++
      } else if (r < 0.6){
        this.x--
      } else if (r < 0.8){
        this.y++
      } else {
        this.y--
      }
    }

  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  bob = new walker();

}

function draw() {
  bob.show();
  bob.step();
}