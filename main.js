pan_song="" ;
harry_song="";

function preload() {
    pan_song=loadSound("music.mp3") ;
    harry_song=loadSound("music2.mp3")
}

function setup() {
    canvas= createCanvas(600,500) ;
    canvas.center() ;
    video= createCapture(VIDEO) ;
    video.hide() ;
}

function draw() {
    image(video, 0,0,600,500) ;
}

