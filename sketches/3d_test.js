import {Pane} from 'https://cdn.jsdelivr.net/npm/tweakpane@4.0.3/dist/tweakpane.min.js';

let b;
let noiseOffsetX = 0;
let noiseOffsetY = 1000;  
let osc, gainNode;
let isPlaying = false;
  
const pane = new Pane();
  
let btn = pane.addButton({
title: 'Play sound',
label: 'Sound',   // optional
});

btn.on('click', () => {
    if (isPlaying) {
        osc.stop();
    } else {
        startSound();
    }
    isPlaying = !isPlaying;
});

class Ball {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.size = 50;
    }
    display() {
        fill(0, 0, 250);
        noStroke();
        circle(this.x, this.y, this.size);
    }
    move() {
        this.x += (noise(noiseOffsetX) - 0.5) * 10; // Noise centré autour de 0
        this.y += (noise(noiseOffsetY) - 0.5) * 10;

        // Incrémenter les offsets de bruit pour un mouvement continu
        noiseOffsetX += 0.01;
        noiseOffsetY += 0.01;

        // Limiter la balle au canvas
        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }

    updateSound() {
        // Calcule la fréquence en fonction de la position x et y
        const freqX = map(this.x, 0, width, 200, 800);
        const freqY = map(this.y, 0, height, 200, 800);
        const frequency = (freqX + freqY) / 2;
        
        // Mettre à jour la fréquence de l'oscillateur
        osc.frequency.setValueAtTime(frequency, osc.context.currentTime);
    }
}

function setup() {
    createCanvas(500, 500);
    background(255);
    b = new Ball();    
    startSound(); // Démarre le son au début
}

function draw() {
    background("rgba(255,255,255,0.1)");
    grid();

    fill(0, 0, 250);
    noStroke();
    b.display();
    b.move();
    b.updateSound();
}

function grid() {
    stroke(0);
    for (let i = 0; i < width; i += 50) {
        for (let j = 0; j < height; j += 50) {
            line(i, j, i + 50, j + 50);
            line(i + 50, j, i, j + 50);
        }
    }
}

function startSound() {
    if (osc) {
        osc.stop();
    }
    const context = new AudioContext();
    osc = context.createOscillator();
    gainNode = context.createGain();

    osc.type = 'sine';
    gainNode.gain.value = 0.1; // Volume réduit

    osc.connect(gainNode);
    gainNode.connect(context.destination);

    osc.start();
}

window.setup = setup; 
window.draw = draw;