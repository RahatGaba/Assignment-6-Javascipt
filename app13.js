// var name = prompt("Enter username")
// if (name.indexOf('@') > -1  || name.indexOf('.' ) > -1|| name.indexOf(',') >-1|| name.indexOf('!')>-1) {
//     alert("Please enter a valid username");
//   }
// else{
//     document.write(name)
// }
// var username = prompt("Enter user name")
// var a = String.fromCharCode(33);
// var b = String.fromCharCode(44);
// var c = String.fromCharCode(64);
// var d = String.fromCharCode(46);
// if (username.match(a) || username.match(b) || username.match(c) || username.match(d)) {
// alert("Enter a valid username");
// } else {
//    document.write("Username: "+username)
// }
// var username = prompt("Enter user name")
// var a = String.fromCharCode(33);
// var b = String.fromCharCode(44);
// var c = String.fromCharCode(64);
// var d = String.fromCharCode(46);
// if (username.match(a) || username.match(b) || username.match(c) || username.match(d)) {
// alert("Enter a valid username");
// } else {
//    document.write("Username: "+username)
// }
var username = prompt("Enter user name")
var a = String.fromCharCode(33);
var b = String.fromCharCode(44);
var c = String.fromCharCode(64);
var d = String.fromCharCode(46);
if (username.match(a) || username.match(b) || username.match(c) || username.match(d)) {
    alert("Enter a valid username");
} else {
    alert("Hello"+username);
}
