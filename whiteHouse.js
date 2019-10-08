function decorate(myObject){
       myObject.addfirstFamily = function(firstFamily){
        myObject.firstFamily = firstFamily;
        console.log(myObject.firstFamily);
    };
    myObject.addflagColor = function(flagColor){
        myObject.flagColor = flagColor;
        console.log(myObject.flagColor);
    };
    myObject.addhouseColor = function(houseColor){
        myObject.houseColor = houseColor;
        console.log(myObject.houseColor);
    };
    myObject.superPowers = function(){
        myObject.superPowers = false;
        console.log(myObject.superPowers);
    };
    myObject.highPaidJob = function(){
        myObject.highPaidJob = true;
        console.log(myObject.highPaidJob);
    };
    return myObject;
}

var whiteHouse = {};


decorate(whiteHouse);

    
whiteHouse.addfirstFamily("Kennedys");
console.log(whiteHouse.firstFamily);
whiteHouse.addflagColor("OldGlory");
console.log(whiteHouse.flagColor);
whiteHouse.addhouseColor("Red, White & Blue");
console.log(whiteHouse.houseColor);
whiteHouse.superPowers("false");
console.log(whiteHouse.superPowers);
whiteHouse.highPaidJob("True");
console.log(whiteHouse.highPaidJob);