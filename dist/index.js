function func1alert(){
    alert("Clicked button!");
}

function func2confirm() {
    var isTrue = confirm("Do you confirm?");
    if(isTrue){
        alert("You pressed OK!")
    } else {
        confirm("Are you sure you want to cancel?");
    }
}

function aboutMeConfirm() {
    var isTrue = confirm("Do you want to view about me page?");
    if(isTrue){
        location.href="./aboutme.html";
    } else{
        var isTrue = confirm("Are you sure you want to cancel?");
        if(isTrue){
            return
        } else {
            aboutMeConfirm();
        }
    }
}

function changeColorDiv1(){
    var div1 = document.getElementById("div1");
    div1.className = "orangeback";
    div1.id = "null";

    document.getElementById("div1ColorButton").setAttribute("value","Color Changed!")
}

function changeColorDiv2(){
    var div2 = document.getElementById("div2");
    div2.className = "fuchsiaback";
    div2.id = "null";
    
    document.getElementById("div2ColorButton").setAttribute("value","Color Changed!")
}

function changeTextDiv1(){
    var p1 = document.getElementById("p1");
    var text = prompt("Enter text");
    p1.innerHTML=text;
}

function changeTextDiv2(){
    var p2 = document.getElementById("p2");
    var text = prompt("Enter text");
    p2.innerHTML=text;
}