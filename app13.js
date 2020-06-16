var name = prompt("Enter username")
if (name.indexOf('@') > -1  || name.indexOf('.' ) > -1|| name.indexOf(',') >-1|| name.indexOf('!')>-1) {
    alert("Please enter a valid username");
  }
else{
    document.write(name)
}
