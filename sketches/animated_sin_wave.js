function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    let fc = frameCount
    background(255);
    count = 0
    for (var i = 0; i < 100; i++){
      circle(10*i, sin(count-fc/10)*100+height/2, 5)
      count+= 0.3
    }
  
  }
  
  