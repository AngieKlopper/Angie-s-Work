var day = ""
var num = 1
for(var i = 8; i > num; num ++){
switch(num){
    case 1 : {
        day = "Sunday"
        break;
    }
    case 2 :{
        day = "Monday"
        break;
    }
    case 3 :{
        day = "Tuesday"
        break;
    }
    case 4 :{
        day = "Wednesday"
        break;
    }
    case 5:{
        day = "Thursday"
        break;
    }
    case 6:{
        day = "Friday"
        break;
    } 
    case 7:{
        day ="Saturday"
        break;
    }
}

console.log(day)
}
