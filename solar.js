
const hamburger = document.querySelector(".hamburger-cunt");
const hamburgerTop = document.querySelector(".top");
const hamburgerMid = document.querySelector(".mid");
const hamburgerBottom = document.querySelector(".bottom");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
  hamburgerTop.classList.toggle("rotate45");
  hamburgerMid.classList.toggle("hidden");
  hamburgerBottom.classList.toggle("rotateNeg45");
  navLinks.classList.toggle("d-none");
});