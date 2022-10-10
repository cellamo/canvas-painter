function changeColor(){
    var canvas = document.getElementById("can1");
    canvas.style.backgroundColor = "";
    document.getElementById("can1").className = "greenback";
}

function doRed(){
    var canvas = document.getElementById("can1");
    canvas.style.backgroundColor = "red";

    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "yellow";
    ctx.fillRect(10,10,60,60);
    ctx.fillRect(80,10,60,60);
    
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Hello", 15, 45);
    //coursera branch
}

function doBlue(){
    var canvas = document.getElementById("can2");
    canvas.style.backgroundColor = "blue";
}

function doColor(){
    var canvas = document.getElementById("can1");
    var color = document.getElementById("colorPicker").value;

    canvas.style.backgroundColor = color;
}

function doSquare(){
    
    var canvas = document.getElementById("can1");
    var ctx = canvas.getContext("2d");
    var size = document.getElementById("slider").value;
    //clear rectangle
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "yellow";
    ctx.fillRect(10,10,size,size);
    
}