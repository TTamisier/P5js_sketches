const gridSize = 5;
let noiseScale = 0.1;
function setup() {
  createCanvas(400, 400);
}

let aa = 0;

function draw() {
  noStroke()
  background(0);
  for (let i = gridSize; i < width; i+=gridSize){
    for (let j = gridSize; j < width; j+=gridSize){
      let noiseValue = noise(i * noiseScale, j * noiseScale);
      ellipse(i, j, 5 * noiseValue * sin(aa/100)*cos(aa/1000));
      aa++
    }
  }
}