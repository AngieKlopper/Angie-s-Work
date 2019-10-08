var numofscholarships=0;
var studentscores=[72,94,81,98,86,98,96,100];
var studentavg=0;
  for(var i=0;i<studentscores.length;i++){
   studentavg += studentscores[i];
  }
  var result= studentavg/studentscores.length

  if(result>90){
      console.log("you got a scholarship")
      numofscholarships++;
  }
  else(result<90){
    console.log("you almost got a scholarship")
  }