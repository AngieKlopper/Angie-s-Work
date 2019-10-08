var array = [2,4,72,8,98];
var sum = array.reduce(function(a, b) {
  return a + b;  
});
var avg=(sum/array.length);
console.log(sum);
console.log(avg);
