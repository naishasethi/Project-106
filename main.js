function startclassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/WdBa2Dh-3/model.json', modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
var dog=0;
var cat=0;
var horse=0;
var cow=0;
function gotResults(error, results) {
    if (error)  {
        console.error(error);
    }
    else {
        console.log(results);
        randomno_r = Math.floor(Math.random()*255)+1;
        randomno_b = Math.floor(Math.random()*255)+1;
        randomno_g = Math.floor(Math.random()*255)+1;
        document.getElementById("result_name").innerHTML="Dettected voice is of- "+results[0].label;
        document.getElementById("result_name").style.color="rgb("+randomno_r+","+randomno_g+","+randomno_b+")";
        img = document.getElementById("animal");
        if (results[0].label=="Barking") {
            img.src="dogo.jpg";
        }
        if (results[0].label=="Meowing") {
            img.src="catie.jpg"
        }
        if (results[0].label=="Neighing") {
            img.src="horsie.jpg"
        }
        if (results[0].label=="Roaring") {
            img.src="lionn.jpg"
        }
        
    }
}