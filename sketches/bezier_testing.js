function setup() {
    createCanvas(700, 700);
    background(0);
    //noLoop(); // Pas besoin de redessiner continuellement dans cet exemple
}

let x1 = 100;
let y1 = 200;

function draw() {
    background(0);
    bezierHandlesTest();
    bezierFlame();
}

function mouseDragged(){
    x1 = mouseX;
    y1 = mouseY;
}

function bezierHandlesTest(){
    let p0 = createVector(50, 50);
    let p1 = createVector(x1, y1);
    let p2 = createVector(300, 200);
    let p3 = createVector(350, 50);
    let p4 = createVector(400, 200);
    let p5 = createVector(450, 50);

    // Dessine la courbe de Bézier
    noFill();
    stroke(255);
    bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
    bezier(p3.x, p3.y, p4.x, -p4.y, p5.x, p5.y, p5.x, p5.y);
    
    // dessiner le vectuer de Bézier
    fill(255, 0, 0);
    noStroke();
    ellipse(p0.x, p0.y, 10);
    ellipse(p1.x,p1.y,10)
    stroke(255,0,0)
    line(p0.x,p0.y,p1.x,p1.y)

    fill(255, 0, 0);
    noStroke();
    ellipse(p2.x, p2.y, 10);
    ellipse(p3.x,p3.y,10)
    stroke(255,0,0)
    line(p2.x,p2.y,p3.x,p3.y)
}

function bezierFlame(){
    let v1 = createVector(width/2, height-50)
    let v2 = createVector(width/2, height/2)

    let b1 = createVector(width*noise(frameCount*0.01, frameCount*0.02), height-50)
    let b2 = createVector(width*noise(frameCount*0.01, frameCount*0.01), height/2)

    ellipse(b1.x,b1.y,5)
    ellipse(b2.x,b2.y,5)
    fill(230, 50,50)
    noStroke()
    bezier(v1.x, v1.y, b1.x, b1.y, b2.x, b2.y, v2.x, v2.y);
}

window.setup = setup; 
window.draw = draw;
window.keyPressed = keyPressed;