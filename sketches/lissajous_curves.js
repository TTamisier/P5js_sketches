let t = 0;
let A = 50;
let B = 50;
let curve_params;
let grid_size = 4;
let grid_index = [0, 0];

let UI_square = 120;

function setup() {
  curve_params = [
  [1,1, PI/2],
  [1,2, PI/2],
  [3,1, PI/2],
  [3,2, PI/2],
  [3,4, PI/2],
  [5,3, PI/2],
  [5,4, PI/2],
  [5,6, PI/2],
]
  let grid_size = 4;
  let grid_index = [0,0];
  createCanvas(800, 400);
  background(14);
  
  for (let i = 0; i < curve_params.length; i++) {
    let x = (i % 4) * (width / 4); // Position en x (4 carrés par ligne)
    let y = floor(i / 4) * (height / 2); // Position en y (2 lignes)

    push(); // Enregistre le contexte de transformation
    translate(x+40, y+40); // Déplace le canevas à la position calculée
    fill(250)
    noStroke()
    text(`a: ${curve_params[i][0]}, b: ${curve_params[i][1]}, gamma: PI/2 `, 0, -10)
    square(0, 0, UI_square, 10);
    pop(); // Restaure le contexte de transformation
  }
  
}

function draw() {
  stroke(20);
  strokeWeight(2);
  t += 0.01;
  
  for (const param of curve_params) {
    push(); // Enregistre l'état de transformation pour chaque courbe
    translate(grid_index[0] * 200 + 100, grid_index[1] * 200 + 100); // Positionne chaque courbe dans une grille    
    lissajous_curve(param[0], param[1], param[2]);
    pop(); // Restaure l'état de transformation

    // Mise à jour de la grille
    grid_index[0]++;
    if (grid_index[0] >= grid_size) {
    grid_index[0] = 0;
    grid_index[1]++;
    }
  }
    grid_index = [0, 0];
}

function lissajous_curve(a,b,gamma){
  x = A*sin(t*a + gamma)
  y = B*sin(t*b)
  point(x,y)
}