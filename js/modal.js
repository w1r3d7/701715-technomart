var fmodal = document.getElementById("feedback-modal");
var fbtn = document.getElementById("open-feedback-modal");
var fclose = document.getElementById("close-feedback-modal");

fbtn.onclick = function () {
    fmodal.style.display = "block";
}

fclose.onclick = function () {
    fmodal.style.display = "none";
}


var mmodal = document.getElementById("map-modal");
var mbtn = document.getElementById("open-map-modal");
var mclose = document.getElementById("close-map-modal");

mbtn.onclick = function () {
    mmodal.style.display = "block";
}

mclose.onclick = function () {
    mmodal.style.display = "none";
}