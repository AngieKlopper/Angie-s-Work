var a=35;
var b=17;

function add(a,b){
    var x=(a+b);
    console.log("addition = ", x)
}
function subtract(a,b)
{
    var y=(a-b);
    console.log("subtraction =  ", y)
    }
function both(a,b) {
    add(a,b);
    subtract(a,b)

    console.log (both)
}

add(a,b);
subtract(a,b);
both(a,b);