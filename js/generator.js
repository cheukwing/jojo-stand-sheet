var canvas = document.getElementById('myCanvas');
var nameBox = document.getElementById('nameInput');
var masterBox = document.getElementById('masterInput');
var customImage = document.getElementById('imageUpload');

var namePrefix = "[STAND NAME]";
var masterPrefix = "[STAND MASTER]";

var imageObj = new Image();
imageObj.onload = function() {
  canvas.height = imageObj.height;
  canvas.width = imageObj.width;
  updateText();
};

var fontSize = 50;

window.onload = function() {
  imageObj.src = 'img/example2.jpeg';
}

function updateImage() {
  if (true) {
    imageObj.src = 'img/example.jpeg';
  }
  updateText();
}

function updateText() {
  var context = canvas.getContext('2d');
  context.font = fontSize + "px serif";
  context.fillStyle = "white";
  context.textAlign = "start";
  context.drawImage(imageObj, 0, 0);
  // unsure of why fontSize does not result in correct height for stand name
  strokeFillText(context, namePrefix, fontSize, fontSize * 1.5);
  strokeFillText(context, nameBox.value, fontSize, fontSize * 2.5);
  context.textAlign = "end";
  strokeFillText(context, masterPrefix, canvas.width - fontSize, canvas.height - (fontSize * 2));
  strokeFillText(context, masterBox.value, canvas.width - fontSize, canvas.height - fontSize);
}

function strokeFillText(context, text, x, y) {
  context.strokeText(text, x, y);
  context.fillText(text, x, y);
}
