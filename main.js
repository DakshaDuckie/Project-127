var song1 = ""
var song2 = "";
function preload(){
    song1 = loadSound("song#1.mp3");
    song2 = loadSound("song#2.mp3");
}

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.hide();
}

function draw(){
    image(camera,0,0,600,530);
}
