video="";
status="";
array1=[];
function setup(){
canvas=createCanvas(480,380);
canvas.center();
}

function preload()
{
video=createVideo('video.mp4');
video.hide();
}
function draw(){
image(video,0,0,480,380);
if(status!=""){
  objectDetector.detect(video,gotResult);
  for(i=0;i<arrary1.length;i++){
    document.getElementById('idk').innerHTML="status:object detected";
    
    document.getElementById('x').innerHTML="Number of Object Detacted Are " + array1.length;
  
  fill('#FF0000');
  percecnt=floor(array1[i].confidence*100);

text(array1[i].label+ " "+ percecnt + "%", array1[i].x+15,array1[i].y+15);
noFill();
stroke('#FF0000');
rect(array1[i].x,array1[i].y,array1[i].width,array1[i].height);

}
}
}
function start(){
  objectDetector=ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById('idk').innerHTML="Status : detecting objects";
}
function modelLoaded(){
  console.log('Model is loaded successfully!');
  status=true;
  video.loop();
  video.speed(1);
  video.volume(0);
}
function gotResult(error,results){
if(error){
console.log(error);

  
}
else{
  console.log(results);
array1=results;
}

}