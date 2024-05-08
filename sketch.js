//NoisyGrid

var t = 0;
var stepSize = 20;

function setup() {
    createCanvas(500, 500);
    green = color(0,255,0);
    blue = color(70,130,180);
    red = color(255,0,0);
    white = color(255);
    black = color(0);
}

function draw() {
    background(125);
    fill(255);
    
    colorGrid();
    compassGrid();
}

function colorGrid(){
    for (var x = 0; x < 25; x++){
        for(var y = 0; y < 25; y++){
            var tX = (x*stepSize+frameCount)*0.01;
            var tY = (y*stepSize+frameCount)*0.01;
            var n = noise(tX, tY);
            var c = lerpColor(blue, white,n);
            noStroke();
            fill(c);
            rect(x*20, y*20, 20, 20);
        }
    }
}

function compassGrid(){
    for (var x = 0; x < 25; x++){
        for(var y = 0; y < 25; y++){
            push();
            translate((x+1)*20-20/2, (y+1)*20-20/2)
            var s = map(mouseX,0, width,10,0);
            var tX = (x*stepSize+frameCount*s)*0.01;
            var tY = (y*stepSize+frameCount*s)*0.01;
            var n = noise(tX, tY);
            var c = lerpColor(black,black,n);
            var a = map(n,0,1,0,720);
            rotate(radians(a));
            fill(c);
            ellipse(0,0,20,2);
            
            pop();
        }
    }
}