status="";
objects=[];
input_name="";

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
input_name = document.getElementById("object_name").value;
}

function modelloaded() 
{
    status=true;
    console.log("Model is Loaded!");
    
}

function gotResults(error, results) 
{
    if(error) 
    {
       console.log(error);
    }
    else
    {
       console.log(results);
       objects = results;
    }
  } 

function draw() 
{
    image(video, 0, 0, 350, 300);
       
        if(status != "")
        {
          objectDetector.detect(video, gotResults);
          for (i = 0; i < objects.length; i++) 
          {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
  
           
            if(objects[i].label == input_name)
            {
              objectDetector.detect(gotResults);
              document.getElementById("object_detected").innerHTML = input_name + " Found";
              synth = window.speechSynthesis;
              utterThis = new SpeechSynthesisUtterance(input_name + "Found");
              synth.speak(utterThis);
            }
            else
            {
              document.getElementById("object_detected").innerHTML = input_name + " Not Found";
            }          
           }
        }
  }


