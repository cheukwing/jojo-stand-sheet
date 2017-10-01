var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var fontSize = 50;
context.font = fontSize + "px serif";
context.fillStyle = 'white';
var imageObj = new Image();
var nameBox = document.getElementById('nameInput');
var masterBox = document.getElementById('masterInput');

var namePrefix = "[STAND NAME]";
var masterPrefix = "[STAND MASTER]";

window.onload = function() {
  imageObj.onload = function() {
    updateImage();
  };
  imageObj.src = 'img/example.jpeg'
}

function updateImage() {
  context.textAlign = "start";
  context.drawImage(imageObj, 0, 0);
  strokeFillText(namePrefix, fontSize, fontSize);
  strokeFillText(nameBox.value, fontSize, fontSize * 2);
  context.textAlign = "end";
  strokeFillText(masterPrefix, canvas.width - fontSize, canvas.height - (fontSize * 2));
  strokeFillText(masterBox.value, canvas.width - fontSize, canvas.height - fontSize);
}

function strokeFillText(text, x, y) {
  context.strokeText(text, x, y);
  context.fillText(text, x, y);
}
