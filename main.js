var song1 = ""
var song2 = "";
function preload(){

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