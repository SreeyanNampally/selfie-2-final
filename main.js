var speech_recognition = window.webkitSpeechRecognition;
var recognition = new speech_recognition();
Webcam .set({
width:360,
height:360,
image_format: "jpeg",
jpeg_quality:90
}) 
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start()
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript
    document.getElementById("textbox").innerHTML=content;
     console.log(content)
     speak();
}
camera = document.getElementById("camera");
function speak(){
var synth = window.speechSynthesis
speakdata= "Taking your selfie in 5 seconds";
var utterthis= new SpeechSynthesisUtterance(speakdata);
synth.speak(utterthis);
Webcam.attach(camera); 
setTimeout(() => {
    take_snapshot();
    save()
}, 5000);
}

function take_snapshot(){
    Webcam.snap(
        function(data_uri){
            document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">'
        }
        )
}

function save(){
    link = document.getElementById("link")
    image = document.getElementById("selfie_image").src
    link.href = image
    link.click()
}

