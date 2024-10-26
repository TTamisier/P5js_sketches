let particles = [];
let pCount = 5000;
const noiseScale = 0.01

function setup() {
  createCanvas(400, 400);
  
  for(let i = 0; i < pCount; i++){
    particles.push(createVector(random(width), random(height)))
  }
  stroke(255)
}

function draw() {
  background(0, 10);
  for(let i = 0; i < particles.length; i++){
    point(particles[i].x,particles[i].y)
    
    let n = noise(particles[i].x * noiseScale, particles[i].y * noiseScale)
    let a = TAU * n
    particles[i].x += cos(a)
    particles[i].y += sin(a)
    if(!onScreen(particles[i])){
      particles[i].x = random(width)
      particles[i].y = random(height)
    }
  }
}

function onScreen(v){
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}