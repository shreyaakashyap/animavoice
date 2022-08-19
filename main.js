function startClassification() {
    navigator.mediaDevices.getUserMedia({audio :true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/0N00HsFcL/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error,results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("results_label").innerHTML= "I can hear -" + results[0].label;
        document.getElementById("results_accuracy").innerHTML= "Accuracy -" + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("results_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("results_accuracy").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img0 = document.getElementById("sound"); 
        img1 = document.getElementById("lion");
        img2 = document.getElementById("cat");
        img3 = document.getElementById("bee");
        img4 = document.getElementById("dog");

        if (results[0].label == "Cat") {
            img0.src = '';
            img1.src = 'cat.png style="visibility : visible';
            img2.src = '';
            img3.src = '';
            img4.src = '';
        }else if (results[0].label == "Bee") {
            img0.src = '';
            img1.src = '';
            img2.src = 'download.png style="visibility : visible';
            img3.src = '';
            img4.src = '';
        }else if (results[0].label == "Lion") {
            img0.src = '';
            img1.src = '';
            img2.src = '';
            img3.src = 'lion.png style="visibility : visible';
            img4.src = '';
        }else if (results[0].label == "Dog") {
            img0.src = '';
            img1.src = '';
            img2.src = '';
            img3.src = 'dog.png style="visibility : visible';
            img4.src = '';
        }else{
            img0.src = 'sound.png style="visibility : visible';
            img1.src = '';
            img2.src = '';
            img3.src = '';
            img4.src = '';
        }

    }

}