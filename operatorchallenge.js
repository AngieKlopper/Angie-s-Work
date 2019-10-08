var x = "Kansas City Royals";
var y = "Kansas City Chiefs";
var z = x.length + y.length;
console.log (x.substring(0,2));
console.log (y.substring(0,2));
var backasswords = y.split("").reverse().join("");

console.log (backasswords);

function isLarger(x,y){
if(x > y){
    document.getElementById("demo1").innerHTML=(x + " is larger than " + y );
}
else{
    document.getElementById("demo1").innerHTML=(y +" is larger than " + x);
}
}
isLarger(x,y);

document.getElementById("demo2").innerHTML= (backasswords);
document.getElementById("demo3").innerHTML= z;
document.getElementById("demo4").innerHTML= x.substring(0,2) +  "  "  + y.substring(0,2);