function posNeg (num1, num2, isNegative){
    if (isNegative){
    console.log (num1<0 && num2<0);
    }
    else{
        console.log ((num1<0 && num2>0)||(num1>0 && num2<0));
    } 
    }

posNeg(-1,1,false);
posNeg(1,-1,false);
posNeg(-4,-5,true);
posNeg(-3,7,true);