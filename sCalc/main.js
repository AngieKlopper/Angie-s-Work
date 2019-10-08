function add(x,y) {
    var x = Number(document.getElementById("num1").value);
    var y = Number(document.getElementById("num2").value);
    var z = x+y;
    document.getElementById("result").innerHTML = z;
}

function sub(x,y) {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = x-y;
    document.getElementById("result").innerHTML = z;
}

function div(x,y) {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = x/y;
    document.getElementById("result").innerHTML = z;
}

function multi(x,y) {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = x*y;
    document.getElementById("result").innerHTML = z;
}