var today = new Date();
document.write("Current Date: "+today)
document.write("<br/>")
var ms = today.getTime();
document.write("Elapsed miliseconds since January 1, 1970: "+ms);
var min = Math.floor((ms/60000))
document.write("<br/>")
document.write("Elapsed minutes since January 1, 1970: "+min);