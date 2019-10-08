var text=" ";

for(i=0;i<3;i++)
{
    text=text+"The value is "+i;
   
    var j=0;
        while(j<2)
        {
            text=text+"the value is "+j;
            
            j++;
        }
}

console.log(text);