var secretNumber = Math.random();
var improvedNum = (secretNumber * 10) + 1;
var numberOfStars = Math.floor(improvedNum);
console.log(numberOfStars)
var input = prompt("Enter a number between 1 and 10")
if(input==numberOfStars){
    alert("Congratulations!")
}
else{
    alert("Try again!")
}