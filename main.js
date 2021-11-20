status="";

function preload() 
{

}

function setup() 
{
canvas=createCanvas(350,300);
canvas.center();
video=createCapture(VIDEO);
video.size(350,300);
video.hide();
}

function start() 
{
objectDetector=ml5.objectDetector('cocossd',modelloaded); 
document.getElementById("status").innerHTML="Status : Detecting Objects";
document.getElementById("object_name").value;
}

function modelloaded() {
    status=true;
    console.log("Model is Loaded!");
    
}

function draw() 
{
    image(video,0,0,350,300);
} 


