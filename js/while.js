var j= 2;

while(j<65536){
  console.log(j);
  j*=2;
}


//Ice cream Exercises

var conesToSell = Math.floor(Math.random()*50+50);
var soldCones = 0;

//Function returns random value between 1 and 5
var randomCones = ()=>{return Math.floor(Math.random()*5)+1};
var purchasedCones = 0;
var conesLeft = 0;

do{
   purchasedCones = randomCones();
   soldCones +=purchasedCones;
   conesLeft = conesToSell-soldCones;


   if(soldCones<conesToSell){
       console.log(`${soldCones} cones sold.`);
   }else if(purchasedCones > conesLeft){
       console.log(`Cannot sell you ${purchasedCones} cones I only have ${conesLeft}`);
   }



}while(soldCones< conesToSell);

console.log('Yay! I sold them all!');
