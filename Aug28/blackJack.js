function blackjack(num1, num2){
    if (num1<=21||num2<=21){
        text="The number closest to 21 is "+ num1 || num2
        console.log (text)
        }
        else if(num1 > 21|| num1<0||num2 > 21|| num2<0){
        text="Busted sucker";
        console.log(text)
        }
    else {   
        
    console.log (text)
}
      
}


num1=19;
num2=22;
blackjack(num1, num2);

