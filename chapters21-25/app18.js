var str = "The quick brown fox jumps over the lazy dog";
document.write("Text: "+str);
document.write("<br/>");
var newStr = str.toLowerCase();
var result = newStr.split("the").length-1;
document.write("There are "+result+" occurence(s) of the word 'the'");
