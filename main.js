function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);

     canvas = createCanvas(560, 150);
     posenet = ml5.posenet(video, modelLoaded);
}

function modelLoaded(){
    console.log("PoseNet is Initialized")
}
function gotPoses(results){

     if(results.length > 0)
     {
    console.logs(results);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
     }
}
function draw(){
    background('#6C91C2');
    textSize(difference);
    fill('#FFE787');
    text(Peter, 50, 400);
}