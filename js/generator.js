var canvas = document.getElementById('myCanvas');
var nameBox = document.getElementById('nameInput');
var masterBox = document.getElementById('masterInput');

var namePrefix = "[STAND NAME]";
var masterPrefix = "[STAND MASTER]";

var imageObj = new Image();
var context = canvas.getContext('2d');
var fontSize = 50;

window.onload = function() {
  imageObj.onload = function() {
    updateImage();
  };
  imageObj.src = 'img/example2.jpeg'
}

function setContext() {
  canvas.height = imageObj.height;
  canvas.width = imageObj.width;
  context = canvas.getContext('2d');
  fontSize = 50;
  context.font = fontSize + "px serif";
  context.fillStyle = "white";
}

function updateImage() {
  context.textAlign = "start";
  setContext();
  context.drawImage(imageObj, 0, 0);
  // unsure of why fontSize does not result in correct height for stand name
  strokeFillText(namePrefix, fontSize, fontSize * 1.5);
  strokeFillText(nameBox.value, fontSize, fontSize * 2.5);
  context.textAlign = "end";
  strokeFillText(masterPrefix, canvas.width - fontSize, canvas.height - (fontSize * 2));
  strokeFillText(masterBox.value, canvas.width - fontSize, canvas.height - fontSize);
}

function strokeFillText(text, x, y) {
  context.strokeText(text, x, y);
  context.fillText(text, x, y);
}
