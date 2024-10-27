class Neuron {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.vx = random(-1, 1); // Vitesse en x
        this.vy = random(-1, 1); // Vitesse en y
    }

    move() {
        // Ajout progressif de la vitesse pour un mouvement plus lisse
        this.x += this.vx*speed;
        this.y += this.vy*speed;

        // Inversion de la vitesse si on atteint un bord
        if (this.x < 0 || this.x > width) {
            this.vx *= -1;
            color_index = (color_index + color_speed);
        }
        if (this.y < 0 || this.y > height) {
            this.vy *= -1;
            color_index = (color_index + color_speed);
        }
    }

    show() {
        fill(color_index%255, (color_index+color_offset)%255, (color_index+color_offset)%255);
        noStroke();
        circle(this.x, this.y, this.size);
    }
}

let neurons = [];
let link_threshold = 100;
let speed = 3;
let color_index = 0;
let color_offset = 100;
let color_speed = 1;

function setup() {
    createCanvas(600, 600);
    background(255);

    for (let i = 0; i < 100; i++) {
        neurons.push(new Neuron(random(width), random(height), 10));
    }
}

function draw() {
    background("rgba(0, 0, 0, 0.01)");
    // Mise à jour et affichage des neurones
    for (let neuron of neurons) {
        neuron.move();
        neuron.show();
    }

    // Dessin des connexions si deux neurones sont proches
    for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
            let d = dist(neurons[i].x, neurons[i].y, neurons[j].x, neurons[j].y);
            if (d < link_threshold) {
                stroke(color_index%255, (color_index+color_offset)%255, (color_index+color_offset)%255);
                line(neurons[i].x, neurons[i].y, neurons[j].x, neurons[j].y);
            }
        }
    }
}
