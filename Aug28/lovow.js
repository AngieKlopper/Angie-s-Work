function lovow(CHIEFS){
    var CHIEFS="KANSAS CITY CHIEFS";
    console.log(CHIEFS.toLowerCase());
    var vowels="aeiouAEIOU";
    var vowelCounter=0;

    for(var x = 0; x < CHIEFS.length ; x++)
    {
        if (vowels.indexOf(CHIEFS[x]) !==-1)
    {
    vowelCounter += 1;
    }
    }
    console.log(vowelCounter);
}
lovow();



  

