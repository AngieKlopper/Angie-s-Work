function endswithly(string){
if (string.substring(string.length-2).match("ly")){
console.log("true")
}
else{
    console.log("False");
} 
}



endswithly("Happy")
endswithly("truly")
endswithly("happily")
endswithly("apply")
