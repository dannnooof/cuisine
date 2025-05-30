window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var navbar = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= navbar) {
    navbar.classList.add("navbar")
  } else {
    navbar.classList.remove("navbar");
  }
}





