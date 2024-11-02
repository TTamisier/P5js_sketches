margin = 40;
let grainSize = 1;

function setup(){
    createCanvas(660, 660);
    background(227, 209, 185)
    drawGrid();
    strokeWeight(1);
    textSize(15);
    fill(0);
    noStroke();
    text("The grid", (width-margin)/2, 25);
    grain();

}

function draw(){

}

function grain(){
    push()
    blendMode(SOFT_LIGHT)
    noStroke()
    for(i = 0; i < width; i += grainSize){
        for(j=0; j<height; j += grainSize){
            fill(150*noise(i*0.9,j*0.9))
            square(i,j,grainSize)
        }
    }
    pop()
}

function drawGrid(){
    //blending
    push()
    noFill();
    stroke(50);
    rect(margin, margin, width - 2 * margin, height - 2 * margin);

    height_offset = height-2*margin;
    let lineCount = 0; // Counter to track every 4th line
    for (let i = 0; i < height_offset; i += height_offset / 66) {
        if (lineCount % 3 === 0) {
            strokeWeight(1.5);
        } else {
            strokeWeight(0.5);
        }
        r = sin(random())*3
        line(margin, margin + i+r, width - margin, margin + i+r);
        lineCount++; // Increment the counter for each line drawn
    }

    width_offset = width-2*margin;
    for (let i = margin; i < width_offset+margin; i += width_offset / 33) {
        strokeWeight(0.5);
        r = sin(random())*4
        line(i+r, margin,i+r, height - margin);
    }
    strokeWeight(2);
    beginShape();
        vertex(margin, 0+10);
        vertex(margin, margin);
        vertex(10, margin);
    endShape();

    beginShape();
        vertex(width-margin, 10);
        vertex(width-margin, margin);
        vertex(width-10, margin);
    endShape();

    beginShape();
        vertex(margin, height-10);
        vertex(margin, height-margin);
        vertex(10, height-margin);
    endShape();

    beginShape();
        vertex(width-margin, height-10);
        vertex(width-margin, height-margin);
        vertex(width-10, height-margin);
    endShape();

    pop()
}