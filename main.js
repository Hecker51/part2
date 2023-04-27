function preload()
{
  cria = loadImage('https://i.postimg.cc/vTLQXLPM/kisspng-brixton-cowboy-hat-clothing-accessories-cap-cowboy-hat-5abf224c501f70-0700841015224755963282.png')
}
function draw()
{
    image(video, 0, 0, 300, 300)
    
    image(cria, noseX - 50, noseY - 100, 100, 100)
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
  save("foto_bem_feia.png")
}