const GRID_SIZE = 20;
const SPEED = 5000;
const NODE_SIZE = 10;

let activeNode;
let grid = [];
let visitedNodes = [];
let isPaused = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  activeNode = createVector(GRID_SIZE, GRID_SIZE);
  createGrid();
  pickNewTarget();
}

function draw() {
  background(0);
  if (!isPaused) {
    updateActiveNode();
  }
  drawGrid();
  drawActiveNode();
}

function createGrid() {
  for (let x = GRID_SIZE; x <= width - GRID_SIZE; x += GRID_SIZE) {
    for (let y = GRID_SIZE; y <= height - GRID_SIZE; y += GRID_SIZE) {
      grid.push(createVector(x, y));
    }
  }
}

function drawGrid() {
  noStroke();
  for (let point of grid) {
    if (isVisited(point)) {
      fill(255);
      rect(point.x - NODE_SIZE / 2, point.y - NODE_SIZE / 2, NODE_SIZE, NODE_SIZE);
    } else {
      fill(255, 100);
      ellipse(point.x, point.y, 5);
    }
  }
}

function drawActiveNode() {
  fill(255, 0, 0);
  ellipse(activeNode.x, activeNode.y, NODE_SIZE);
}

function updateActiveNode() {
  let target = grid.find(p => p.x === activeNode.target.x && p.y === activeNode.target.y);
  if (!target) return;

  let direction = p5.Vector.sub(target, activeNode);
  if (direction.mag() <= SPEED) {
    activeNode.set(target);
    visitedNodes.push(activeNode.copy());
    pickNewTarget();
  } else {
    direction.setMag(SPEED);
    activeNode.add(direction);
  }
}

function pickNewTarget() {
  let unvisitedNodes = grid.filter(node => !isVisited(node));
  if (unvisitedNodes.length === 0) {
    console.log("All nodes visited!");
    noLoop();
    return;
  }
  activeNode.target = random(unvisitedNodes);
}

function isVisited(point) {
  return visitedNodes.some(v => v.equals(point));
}

function keyPressed() {
  if (keyCode === ENTER) {
    isPaused = !isPaused;
  } else if (key === 'r' || key === 'R') {
    reset();
  }
}

function reset() {
  visitedNodes = [];
  activeNode.set(GRID_SIZE, GRID_SIZE);
  pickNewTarget();
  loop();
}