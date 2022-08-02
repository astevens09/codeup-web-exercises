//This function logs the mulitiplication table for the passed in value
function showMultiplicationTable(num){
  for(var i=1; i<=10; i++){
    console.log(
      num+" x "+i+" = "+ num*i);
  };
}

//prints 10 random number between 20-200 to the console
// (function(){
  var num = 0;

  for(var i=0; i<10;i++){
   num = randomNumber();

   console.log(isEven(num));
  }

  //This function returns whether the passed in value is even or odd
  function isEven(num){

   if(num%2==0){
    return num +" is even";
   }else{
    return num +" is odd";
   }
  }

  //This function returns a random number between 20 and 200
  function randomNumber(){
   return Math.floor(Math.random()*181)+20;
  }
// })()

//Below is the solution to exercise 4
//This function prints the index the same number of times as the index
(function(){
  for(var i=1; i < 10; i++){
   var num = i;
   var numS = num.toString();
   numString= num.toString();

    for(var j=1; j<i; j++){
     numString+= numS;
   }
   console.log(Number(numString));
  }


})()



//Below is the solution to exercise 5
//This function prints 100 -5 each console log
for(var i=100; i>0; i-=5){
    console.log(i);
}
