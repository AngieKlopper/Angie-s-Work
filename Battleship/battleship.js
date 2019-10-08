var randomloc = Math.floor(Math.random()*5)
var location1 = randomloc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk==false) {
    guess = prompt("Ready, aim, fire! (enter a number from number 0-6):");
    if (guess < 0|| guess >6){
        alert("Please enter a valid number!  Only numbers from 0 to 6.")
    }    else{
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess ==location3){

            alert("You hit my ship")
       
            hits = hits +1;
            
            if (hits == 3){
                isSunk = true;

                alert("You sank my battleship!");
            }

        }
    }

}
var stats ="You took " + guesses +"  guesses to sink the battleship,  " +  
"which means your shooting accuracy was  " + (3/guesses);
alert (stats);
console.log (battleship);
