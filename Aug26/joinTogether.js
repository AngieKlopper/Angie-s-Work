function joinTogether(str1,str2) {
if (str1.length>2&&str2.length>2) {
    console.log(str1.substring(1,str1.length).concat(str2.substring(1,str2.length)));
  
}

           else {
            console.log("Not Happening");
        }
    }
  
 var str1="Forever";
 var str2="Royal";

 joinTogether(str1,str2);