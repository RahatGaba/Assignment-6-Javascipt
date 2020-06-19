var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

var n = weekday[d.getDay()];
if(n=="Sat" || n=="Sun"){
    document.write("It's Fun day")
}
else{
    document.write("It's Working day")
}