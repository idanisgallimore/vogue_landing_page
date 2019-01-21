var navCont = document.querySelector(".nav-container");
var icon1 = document.querySelector(".iconnav1");
var icon2 = document.querySelector(".iconnav2");
var navText = document.querySelector(".nav-text");
var smallTxt = document.querySelector(".smalltext");
var brandsmall = document.querySelector(".brandsmall");


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navCont.style.top = "0";
    navText.style.color = "black";
    smallTxt.style.color = "#85929E";
    brandsmall.style.color = "black";
    icon1.style.borderRight = "1px solid #AEB6BF";
    icon2.style.borderLeft = "1px solid #AEB6BF";

  } else {
    navCont.style.top = "205px";
    navText.style.color = "white";
    smallTxt.style.color = "white";
    brandsmall.style.color = "white";
    icon1.style.border = "0";
    icon2.style.border = "0";
  }
}