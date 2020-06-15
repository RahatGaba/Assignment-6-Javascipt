var city = prompt("Enter any City name ");
var str = prompt("Enter string you want to replace ")
var newStr = prompt("Enter new string")
document.write("City: "+city)
document.write("<br>")
document.write("After replacement: "+city.replace(str,newStr));