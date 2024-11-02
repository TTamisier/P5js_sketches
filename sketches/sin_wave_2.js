
import {Pane} from 'https://cdn.jsdelivr.net/npm/tweakpane@4.0.3/dist/tweakpane.min.js';

let xspacing = 10; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave

const PARAMS = {
  factor: 0.01,
  title: 'hello',
  color: '#ff0055',
};

const pane = new Pane();

pane.addBinding(
  PARAMS, 'factor',
  {min: 0, max: 1, step: 0.01});
pane.addBinding(PARAMS, 'title');
pane.addBinding(PARAMS, 'color');

function setup() {
  createCanvas(710, 400);
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  background("rgba(0,0,0,0.1)");
  calcWave();
  renderWave();
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += PARAMS.factor;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  fill(255);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x] + sin(randomGaussian(0, 20))*50, 10, 10);
  }
}

window.setup = setup; 
window.draw = draw;
window.keyPressed = keyPressed;
