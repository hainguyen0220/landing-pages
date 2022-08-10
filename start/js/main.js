
// ---------------------------------

    document.getElementById("toggle").onclick = function() {
    document.getElementById("navbarOne").classList.toggle("show");
    document.getElementById("toggle").classList.toggle("active01");
    
};
// -------------------button header--------------

var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}

// --------------watch the video-------------------

function video1() {
    var trailer =document.querySelector(".trailer")
    var video =document.querySelector("iframe")
    trailer.classList.toggle("visibility");
    video.pause();
    video.currentTime = 0;
    
}
// --------------- co định header------------------
const navbar = document.querySelector(".navgition-absolute")
        window.addEventListener("scroll", fixed_nav)

        function fixed_nav(){
            if(window.scrollY > navbar.offsetHeight) {
                navbar.classList.add('navgition-fixed')
            }else {
                navbar.classList.remove('navgition-fixed')
            }
        }

// ----------------- back to top----------------

const backtotop = document.querySelector(".back-to-top")
window.addEventListener("scroll", dp_none)

function dp_none(){
    if(window.pageYOffset > 500) {
        backtotop.classList.add('dp-none')
    }else {
        backtotop.classList.remove('dp-none')
    }
}
// -------------- slide show-------------------


function checkMessage() {
    let text;
    var x = document.getElementById("name").value
    var x = document.getElementById("email").value
    var x = document.getElementById("subject").value
    var x = document.getElementById("phone").value
    var x = document.getElementById("massage").value
    document.getElementById("form-message1").classList.add('error')
    if (x == ""|| x == null) {
        text = "Please complete the form and try again.";

    } else  {
        text = " Thank You! Your message has been sent.";
        document.getElementById("form-message1").style.color = "black"
        
    }
    
    document.getElementById("form-message1").innerHTML = text;
}

function formValidate(){
    var regExp = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
    var email = document.getElementById("email").value;
    var luaga = document.getElementsById("list-email").innerHTML
    if (regExp.test(email)) {
        luaga = "dsahhhhhhhhhhh";
        }
    else {
        luaga ="dddddddđ";
    }

    }


    // function formValidate(){
    //     var regExp = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
    //     var email = document.getElementById("email").value;
    //     if (regExp.test(email)) 
    //         alert('Email hợp lệ!'); 
    //       else 
    //           alert('email không hợp lệ!');
    //   }
// -------------- slide show-------------------

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//     showDivs(slideIndex += n);
//     }

//     function currentDiv(n) {
//     showDivs(slideIndex = n);
//     }

//     function showDivs(n) {
//     var i;
//     var x = document.getElementsByClassName("single-testimonial");
//     var dots = document.getElementsByClassName("demo");
//     if (n > x.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = x.length}
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";  
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" w3-white", "");
//     }
//     x[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " w3-white";
//     }
