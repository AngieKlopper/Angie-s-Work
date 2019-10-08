var nest = 0
if(nest < 20 ){
    console.log("Im less than 20");
}
for(var i = 20; i > nest; nest ++){
    if(nest == 5){
        console.log("hey I'm 5 now")
    }else{
        console.log ("I'm growing");
    }
    switch (nest) {
        case 1 : 
        {
            console.log("you hit 1")
            break;
        }
        case 2 :
            {
            console.log("you hit 2")
            break;
        }
        case 6 :
            {
            console.log("you hit 6")
            break;
        }
        default:
                console.log("Keep swinging")
    }

}