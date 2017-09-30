window.onload = function() {
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  var imageObj = new Image();
  imageObj.onload = function() {
    context.drawImage(imageObj, 69, 50);
    context.font = '48px serif';
    context.fillText('Hello world', 200, 200);
  };
  imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
}
