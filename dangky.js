function changeText() {
    var text = document.getElementById("btn");
    text.style.fontFamily = "Tahoma";
}
var login = document.getElementById("btn")
login.addEventListener("click", getValue)
function getValue(event) {

    event.preventDefault()

    var name = document.getElementById("name").value
    var email = document.getElementById("email").value 
    var pass = document.getElementById("pass").value
    var repass = document.getElementById("repass").value
    if (name === "") {
        alert(
            " thu muc name trong"
        )
    } else if(email===""){
        alert(
            " thu muc email trong"
        )
        
    }else if(pass===""){
alert(
    "chua nhap mat khau"
)
    }
    else if(repass!==pass){
        alert(
            "khong cung mat khau"
        )

    }
    else {
        document.getElementById("btn").onclick = function () {
            location.href = "http://127.0.0.1:5500/web2010/web.html#";
            alert("Chào mừng bạn "+ name);
        }
    }
    console.log(name)
    console.log(email)
    console.log(pass)
    console.log(repass)
}
document.getElementById("đk").onclick= function(){
    location.href ="http://127.0.0.1:5500/web2010/dangnhap.html"}

