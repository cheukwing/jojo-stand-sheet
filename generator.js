var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
context.font = '20px serif';
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
  var nameText = namePrefix + nameBox.value;
  var masterText = masterPrefix + masterBox.value;
  strokeFillText(nameText, 100, 100);
  strokeFillText(masterText, 200, 200);
}

function strokeFillText(text, x, y) {
  context.strokeText(text, x, y);
  context.fillText(text, x, y);
}
