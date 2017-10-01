var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var nameInput = document.getElementById('nameInput');
var masterInput = document.getElementById('masterInput');
var sizeInput = document.getElementById('sizeInput');
var imageUpload = document.getElementById('imageUpload');

nameInput.addEventListener('change', redraw, false);
masterInput.addEventListener('change', redraw, false);
sizeInput.addEventListener('change', setFontSize, false);
imageUpload.addEventListener('change', handleImage, false);

var namePrefix = "[STAND NAME]";
var masterPrefix = "[STAND MASTER]";
var fontSize = 50;

var img = new Image();
img.onload = function() {
  canvas.height = img.height;
  canvas.width = img.width;
  ctx.drawImage(img, 0, 0);
  updateName();
  updateMaster();
};

window.onload = function() {
  img.src = 'img/example.jpeg';
}

function setFontSize() {
  var regex = /^[0-9]+$/;
  if (sizeInput.value.match(regex)) {
    fontSize = sizeInput.value;
    redraw();
  }
}

function updateName() {
  ctx.textAlign = 'start';
  strokeFillText(ctx, namePrefix, fontSize, fontSize * 1.5);
  strokeFillText(ctx, nameInput.value, fontSize, fontSize * 2.5);
}

function updateMaster() {
  ctx.textAlign = 'end';
  strokeFillText(ctx, masterPrefix, canvas.width - fontSize, canvas.height - (fontSize * 2));
  strokeFillText(ctx, masterInput.value, canvas.width - fontSize, canvas.height - fontSize);
}

function handleImage(e) {
  var reader = new FileReader();
  reader.onload = function(event) {
    img.src = event.target.result;
  }
  reader.readAsDataURL(e.target.files[0]);
}

function strokeFillText(context, text, x, y) {
  context.fillStyle = 'white';
  context.font = fontSize + "px serif";
  context.shadowBlur = 10;
  context.shadowColor = 'white';
  context.lineWidth = fontSize / 10 - 1;
  context.strokeText(text, x, y);
  context.fillText(text, x, y);
}

function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0);
  updateName();
  updateMaster();
}
