function start()
{
    navigator.mediaDevices.getUsermedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.jsion', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);

}

function gotResults(error,results)
{
    console.log("Got Result");
}
