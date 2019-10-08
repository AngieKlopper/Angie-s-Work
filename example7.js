var chapters ={1:"Loops", 2:"Decision", 3:"Arrays"};

var text="";
var i;
for(i in chapters){
    text +=chapters[i];
    text +=" ";
}
console.log(text);
