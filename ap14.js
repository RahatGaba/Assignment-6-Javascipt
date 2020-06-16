A = ["cake", "apple pie", "cookie", "chips", "patties"]
var input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")

var found = A.find(function(element)
 { 
    inputStr = input.toLowerCase(); 
    return element == inputStr; 
    
  }); 
    
  // Printing desired values. 
if(inputStr==found){
document.write(found+" is available at index "+A.indexOf(found)+" in our bakery")
}
else{
    document.write("We are sorry. "+input+" is not available in our bakery")
}

