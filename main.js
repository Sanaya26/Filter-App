noseX = 0;
noseY= 0;

function preload(){
    clown_nose= loadImage("https://i.postimg.cc/qq59jC7s/11-115111-pig-nose-clipart-nariz-de-cerdo-emoji.png");
}


function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded (){
console.log('PoseNet Is Initialized');
}


function draw(){
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0, 0)
    circle(noseX, noseY, 20);
    image(clown_nose, noseX-10, noseY-10, 30, 30);

}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length >0)

    {
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
} 