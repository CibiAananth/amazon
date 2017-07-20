/**
 * Created by Cibi on 6/26/2017.
 */
function register() {
    var na = document.getElementById("name").value;
    var pa = document.getElementById("pass").value;
    var em = document.getElementById("email").value;

    localStorage.setItem("username", na);
    localStorage.setItem("password", pa);
    alert("registered");


}
function retrieve() {

    var name = document.getElementById("loginname").value;
    var pas = document.getElementById("loginpass").value;
    var user=localStorage.getItem("username");
    var pwd=localStorage.getItem("password");
if (name==user && pas==pwd){
    alert("logged in")
}else {
    alert("invalid username or password")
}
}