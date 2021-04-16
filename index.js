var readlineSync = require('readline-sync');

console.log("lets see how much u know me")
var score= 0;
var myName = readlineSync.question('do you know my name? ');
var myFood = readlineSync.question('do you know my fav food? ');
var myBeach = readlineSync.question('do you know my fav beach? ');
var myCompany = readlineSync.question('do you know where i work? ');
var myYear = readlineSync.question('do you know the year quarantine started in india? ');


if(myName==="nikhil")
score++

if(myFood==="biryani")
score++
if(myBeach==="ecr")
score++
if(myCompany==="cognizant")
score++
if(myYear==="2020")
score++

if(score===5){
  console.log("you  know me, let's catchup this weekend")
}
else{
  console.log("better luck next time")
}
