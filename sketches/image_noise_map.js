function preload() {
    img = loadImage('Devil.png');
  }
  
  function setup() {
    createCanvas(400, 400);
    img.loadPixels(); // Load pixel data for the image
  }
  
  function draw() {
    background(220);
  
    // Loop through each pixel in the canvas
    for (let x = 0; x < width; x += 5) {
      for (let y = 0; y < height; y += 5) {
        
        // Calculate the corresponding pixel in the image
        let imgX = floor(map(x, 0, width, 0, img.width));
        let imgY = floor(map(y, 0, height, 0, img.height));
        
        // Get the brightness of that pixel
        let imgIndex = (imgY * img.width + imgX) * 4;
        let brightness = img.pixels[imgIndex]; // R component for grayscale
        let circleSize
        // Use brightness to set circle size
        if(brightness < 252){
          circleSize = map(0, 0, 255, 2, 15);
        } else {
          circleSize = map(brightness/10, 0, 255, 2, 15);
        }
        
        fill(0);
        noStroke();
        ellipse(x, y, circleSize, circleSize);
      }
    }
  }