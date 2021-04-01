function preload(){

}
function setup(){
    video=createCapture(VIDEO);
    video.size(640,480);
    video.position(15,100);
    canvas=createCanvas(640,480);
    canvas.position(670,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(){}
function modelLoaded(){
    console.log("model is loaded")
}
function draw(){
    background("turquoise");
}