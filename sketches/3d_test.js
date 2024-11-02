import { get_sound } from './get_sound.js';

let b;
let noiseOffsetX = 0;
let noiseOffsetY = 1000;  

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
}

function setup() {
    createCanvas(500, 500);
    background(255);
    b = new Ball();
    get_sound();
}

function draw() {
    background("rgba(255,255,255,0.1)");
    grid();

    fill(0, 0, 250);
    noStroke();
    b.display();
    b.move();
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
