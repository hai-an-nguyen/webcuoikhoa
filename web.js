document.getElementById("b1").onclick = function () {
    location.href = "http://127.0.0.1:5500/web2010/b1.html";
}
document.getElementById("b2").onclick = function () {
    location.href = "https://vi.wikipedia.org/wiki/Ng%C3%A0y_Ph%E1%BB%A5_n%E1%BB%AF_Vi%E1%BB%87t_Nam";
}
document.getElementById("b3").onclick = function () {
    location.href = "http://127.0.0.1:5500/web2010/b3.html";
}
document.getElementById("b6").onclick = function () {
    location.href = "http://127.0.0.1:5500/web2010/b6.html";
}

function changeText() {
    var text = document.getElementById("btn");
    text.style.fontFamily = "Tahoma";
}

var login = document.getElementById("footer-button")
login.addEventListener("click", getAlert)
function getAlert(event) {
    event.preventDefault()
    
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value
    if(email===""){alert(
        " chưa nhập email"
    )
   
}
    else if (message === "") {
        alert(
            "chưa nhập lời nhắn"
        )
      
    }
    else{
            alert(
                "Đã gửi thành công"
            )
           location.reload()
    
        }
    }

