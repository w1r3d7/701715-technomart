var modal = document.getElementById("feedback-modal");
var btn = document.getElementById("open-feedback-modal");
var close = document.getElementById("close-feedback-modal");

btn.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }