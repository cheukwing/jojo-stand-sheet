var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var fontSize = 20;
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
  imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
}

function updateImage() {
  context.drawImage(imageObj, 69, 50);
  strokeFillText(namePrefix, 100, 100);
  strokeFillText(masterPrefix, 200, 200);
  var nameText = namePrefix + nameBox.value;
  var masterText = masterPrefix + masterBox.value;
  strokeFillText(nameBox.value, 100, 100 + fontSize);
  strokeFillText(masterBox.value, 200, 200 + fontSize);
}

function strokeFillText(text, x, y) {
  context.strokeText(text, x, y);
  context.fillText(text, x, y);
}
