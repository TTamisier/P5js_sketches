let waveAmplitude = 1; // The height of the wave
let waveFrequency = 0.05; // The width of the wave
let noiseFrequency = 0.1; // Frequency of the squiggliness
let noiseAmplitude = 10; // Amplitude of the squiggliness

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(65, 147, 169);
  stroke(0);
  noFill();
  
  for (y=-100; abs(y) < width+100; y+=20){
    drawWave(y);  
    push()
    translate(300,0)
    rotate(PI/2)
    drawWave(y);
    pop();
  }

}

function drawWave(h){
  beginShape();
  stroke(255)
  for (let x = 0; x < width; x++) {
    // Base sine wave
    let y = h + sin(x * waveFrequency) * waveAmplitude;
    // Add squiggliness with noise
    y += (noise(x * noiseFrequency, frameCount * 0.01) - 0.5) * noiseAmplitude;
    vertex(x, y);
  }
  endShape();

}

function water(){
    // Set the noise level and scale.
  let noiseLevel = 255;
  let noiseScale = 0.009;

  // Iterate from top to bottom.
  for (let y = 0; y < 100; y += 1) {
    // Iterate from left to right.
    for (let x = 0; x < width; x += 1) {
      // Scale the input coordinates.
      let nx = noiseScale * x;
      let ny = noiseScale * y;
      let nt = noiseScale * frameCount;

      // Compute the noise value.
      let c = noiseLevel * noise(nx, ny, nt);

      // Draw the point.
      stroke(c);
      point(x, y);
    }
  }
}