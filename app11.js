var input = prompt("Enter any word")
document.write("User input: "+input)
document.write("<br>")
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  document.write("Title case: "+titleCase(input));
