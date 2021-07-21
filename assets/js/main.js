AOS.init({
    "easing" : "ease-in-out-sine"
})

const faBars = document.querySelector(".fa-bars");
const faClose = document.querySelector(".fa-times");
const menu = document.querySelector("nav");
const header = document.querySelector("header");
const upBtn = document.querySelector(".up");

faBars.addEventListener("click", () =>{
    menu.style.left = "0";
    faClose.style.display = "block";
    faBars.style.display = "none";
})
faClose.addEventListener("click", () =>{
    menu.style.left = "-220px";
    faClose.style.display = "none";
    faBars.style.display = "block";
})

window.addEventListener("scroll", () =>{
    if(window.scrollY > 20){
        header.classList.add("header-bg");
        upBtn.classList.add("up-display");
    }else{
        header.classList.remove("header-bg");
        upBtn.classList.remove("up-display");
    }
});

upBtn.addEventListener("click", () =>{
    window.scrollTo(0, 0);
})

$(document).ready(function(){

    if(window.matchMedia("(max-width: 767px)").matches){
        $("nav a").click(function(){
            $("nav").css("left","-220px")
            $(".fa-bars").css("display","block")
            $(".fa-times").css("display","none")
        })
    }

    $(".submit").click(function(event){
        var email = $(".email").val()
        var message = $(".message").val()
        var notification = $(".notification")
        notification.empty()

        if(email.length > 5 && email.includes(".") && email.includes("@")){
            notification.append("<div>email is valid</div>")
        }else{
            notification.append("<div>email is not valid</div>")
            event.preventDefault()
        }

        if(message.length > 10){
            notification.append("<div>message is valid</div>")
        }else{
            notification.append("<div>message is too short</div>")
        }
    })
})
