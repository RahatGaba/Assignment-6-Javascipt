var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 2) + 1;
var numberOfStars = Math.floor(improvedNum);
document.write(numberOfStars)
document.write("<br/>")
if(numberOfStars == 1){
    document.write("random coin value: Heads")
}
else{
    document.write("random coin value: Tails")
}
