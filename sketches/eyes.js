let eyeList = [];
let gridSize = 50;

class Eyes{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.x1 = this.x-25;
    this.x2 = this.x+25;
  }
  
  show() {
    this.showEye(this.x1, this.y); // Premier œil
    this.showEye(this.x2, this.y); // Deuxième œil
  }

  showEye(x, y) {
    fill(255);
    noStroke();
    bezier(x - 20, y, x - 3, y - 15, x + 3, y - 15, x + 20, y);
    bezier(x - 20, y, x - 3, y + 15, x + 3, y + 15, x + 20, y);

    // Calcul du vecteur directionnel entre le centre de l'œil et le curseur
    let dx = mouseX - x;
    let dy = mouseY - y;

    // Limite de mouvement de la pupille en fonction d'une ellipse (plus large que haute)
    let maxDistX = 10; // Limite horizontale
    let maxDistY = 6;  // Limite verticale

    // Normalisation du vecteur pour qu'il s'insère dans une ellipse
    let angle = atan2(dy, dx);
    let pupilX = x + maxDistX * cos(angle);
    let pupilY = y + maxDistY * sin(angle);

    // Dessine l'iris
    fill(0);
    ellipse(pupilX, pupilY, 20);
  }
}



function setup() {
  
  createCanvas(400, 400);
  for (let i = gridSize; i < width; i+=50){
    for (let j = gridSize/2; j < height; j+=50){
      eyeList.push(new Eyes(i,j))
    }
  }
}

function draw() {
  background(0);
    for (let eye of eyeList) {
    eye.show();
  }
}