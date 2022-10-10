var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 50;
// only paint if mouse is  being dragged (moved while the button is pressed)
var isPainting = false;

function setWidth (value) {

    var value = document.getElementById("width").value;
    var paintcanvas = document.getElementById("canvas1");

    if (isNumeric(value) && value > 100 && value < 1200) {
        // set the width of the canvas
        paintcanvas.width = value;
    }
}

function setHeight (value) {

    var value = document.getElementById("height").value;
    var paintcanvas = document.getElementById("canvas1");

    if (isNumeric(value) && value > 100 && value < 1200) {
        // set the height of the canvas
        paintcanvas.height = value;
    }
}

function clearCanvas () {
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle (x, y) {
    // make sure to start a new circle each time
    context.beginPath();
    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}
// verify the given value is actually a number
function isNumeric (value) {
  // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
  return !isNaN(value);
}

function startPaint(){
    isPainting = true;
}

function endPaint(){
    isPainting = false;
}

function doPaint(x,y){
    var x = event.offsetX;
    var y = event.offsetY;
    if (isPainting) {
        paintCircle(x,y);
    }
}

function setColor(newColor){
  //set brush color to newColor
    color = newColor;

}

function resizeBrush(newRadius){
    //set brush radius to newRadius
        radius = newRadius;
        //Set document.getElementById("sizeOutput").value to newSize
        document.getElementById("sizeOutput").value = newRadius;
}