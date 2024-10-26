dots = [];
maxR = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  makeDots(8000);
  background(0);
  strokeWeight(2);
  stroke(255)
  noFill();

  for (var i = 0; i < dots.length; i++){
    point(dots[i].x, dots[i].y);
  }

  dots = [];
  ellapsed_time = 0;
  if (ellapsed_time() >= 10){
    redraw();
    ellapsed_time = 0;
  }
  ellapsed_time++;

}

function makeDots(n){
//   choose random radius and angle from the center
  for (var i = 0; i < n; i++){
    angle = random(0, 2*PI);
    r = 20 * sqrt(randomGaussian(maxR, 30));
    x = width/2 + r * cos(angle);
    y = height / 2 + r * sin(angle);
    var newDot = createVector(x, y);
    dots.push(newDot);
  }

}

function mousePressed() {
  redraw();
}