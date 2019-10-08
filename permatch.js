var lastname1 = "klopper";
var lastname2 = "riehle";
var result = [];
var eachWord = paragraph.split(" ");

function perMatched(name1, name2){
//compare the names
//if there are any matches--
//increment a number variable
//if there are letters the don't match
//increment a second number
//divide the two numbers and return
//a score...

    for(var i = 0; i,eachWord.length; i++){
        if(eachWord[i] === lastname1){
            console.log(eachWord[i]);
            console.log();
            result.push(eachWord[i]);

        }
        else if(eachWord[i] === lastname2){
            console.log(eachWord[i]);
            console.log();
            result.push(eachWord[i]); 
        }
        else{
        }  
    }
}
searchPara(eachWord, searchBox, secondSearch);

