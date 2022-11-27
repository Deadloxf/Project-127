Peter_pan_song="";
Harry_potter_theme_song="";

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    canvas.position(430,170);

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Peter_pan_song = loadSound("peterpan.mp3");
    Harry_potter_theme_song = loadSound("harrypotter.mp3");
}

function draw(){
    image(video,0,0,600,530);
}