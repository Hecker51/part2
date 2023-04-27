function preload()
{
  cria = loadImage('https://i.postimg.cc/Gmb8VK7W/crid.jpg')
}
function draw()
{
    image(video, 0, 0, 300, 300)
    
    image(cria, noseX - 50, noseY - 50, 100, 100)
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelcarregado)
  poseNet.on('pose', gotPoses)
  }

//💩💩//💩💩//💩💩//💩💩//💩💩//💩💩//💩💩//💩💩//💩💩//💩💩//💩💩//💩💩





function modelcarregado()
{
console.log("TA ON!!!!")
}

var noseX = 0
var noseY = 0 


function gotPoses(results)
{
console.log(results)
if (results.length > 0) {
  noseX = results[0].pose.keypoints[0].position.x;
  noseY = results[0].pose.keypoints[0].position.y;
}

}


function a123(){

}