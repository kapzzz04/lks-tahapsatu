const tombol = document.querySelector("nav .container .bersatu button.btn-n ");
const ulT = document.querySelector("nav .container .navbar-bar");
const btnClose = document.querySelector(".btn-close");

tombol.addEventListener("click", function () {
  ulT.style.display = "flex";
});

btnClose.addEventListener("click", function () {
  ulT.style.display = "none";
});
