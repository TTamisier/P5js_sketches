// https://barbegenerativediary.com/en/tutorials/lissajous-figures-exploring-patterns-born-of-waves-and-vibrations/#LissajousFigures-ExploringPatterns-02-1

let phase = 0;
let pointCount = 100;
let angle;

let freqX = 3;
let freqY = 2;

let phaX = 0;
let phaY = 45;

let x, y;

let factorX, factorY;
let margin = 200;

function setup() {
  createCanvas(800, 800);
  background(0);
  smooth();

  factorX = width / 2 - margin;
  factorY = height / 2 - margin;
}

function draw() {
  background(0);

  translate(width / 2, height / 2);

  noFill();
  stroke(255);
  strokeWeight(1);

  beginShape();
  for (let i = 0; i <= pointCount; i++) {
    angle = map(i, 0, pointCount, 0, TWO_PI);

    x = sin(freqX * angle + radians(phaX) );
    y = sin(freqY * angle + radians(phaY) + frameCount * 0.01);

    x = x * factorX;
    y = y * factorY;

    vertex(x, y);
  }
  endShape();
}
