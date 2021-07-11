noseX=0; noseY=0;
diff=0; leftWristX=0; rightWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);

    canvas=createCanvas(500,500);
    canvas.position(700,150)

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is initiallised")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+noseX+" noseY= "+noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        diff=floor(leftWristX-rightWristX);
        console.log("leftWristX= "+leftWristX+ " rightWristX="+rightWristX)
    }
}
function draw(){
    background('black');
    fill('#DDA0DD');
    stroke('#E6E6FA');
    square(noseX,noseY,diff);
    document.getElementById("sides").innerHTML="width and height of aquare will be "+diff+" px";
}