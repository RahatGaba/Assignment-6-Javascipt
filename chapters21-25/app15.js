var pwd = prompt("Enter password")
document.write("Entered password: "+pwd)
re = /[0-9]/;
var splitpwd = pwd.split("");
document.write("<br>")
// document.write(splitpwd)
// document.write(splitpwd[0])
 if ( splitpwd[0]== !NaN) {
 // Is a number
 document.write("<br>")
 document.write("It should not start with a number<br>Please enter a valid password")
  }
else if(pwd.length < 6)

    {
        document.write("<br>")
    document.write("It must at least 6 characters long <br>Please enter a valid password")
    }
    else

 if(pwd=="" || !re.test(pwd)){
    document.write("<br>")
    document.write("It should contain alphabets and numbers<br>Please enter a valid password")
   
}
 else {
    document.write("<br>")
    document.write("Passowrd saved")
  }
  
