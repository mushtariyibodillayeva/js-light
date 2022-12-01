let toggle = document.getElementById("on");
let body = document.querySelector("body");
let header = document.querySelector("header");
let btn = document.querySelector("button");
toggle.addEventListener("click", function () {
  if (this.classList.toggle("swap-on")) {
    body.style.background = "white";
    header.style.background = "darkorange ";
    body.style.color = "darkred";
    btn.style.background = "#AD1010";
    btn.style.color = "white";
  } else {
    body.style.background = "black";
    header.style.background = "#2E2420";
    body.style.color = "white";
    btn.style.background = "yellow";
    btn.style.color = "black";
  }
});
