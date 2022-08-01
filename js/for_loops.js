//This function logs the mulitiplication table for the passed in value
function showMultiplicationTable(num){
  for(var i=1; i<=10; i++){
    console.log(
      num+" x "+i+" = "+ num*i);
  };
}

//Below is an encapsulated function that prints 10 random number between 20-200 to the console
(function(){
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
})()