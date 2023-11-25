const tombol = document.querySelector("nav .container .bersatu button.btn-n ");
const ulT = document.querySelector("nav .container .navbar-bar");
const btnClose = document.querySelector(".btn-close");

tombol.addEventListener("click", function () {
  ulT.style.display = "flex";
});

btnClose.addEventListener("click", function () {
  ulT.style.display = "none";
});

// berbeda yaaaaaaaaaaaaaaaaaaaa
const username = document.querySelector(".lol-u");
const password = document.querySelector(".lol-p");
const btn = document.querySelector(".btnM");
const frm = document.querySelector("form");

btn.addEventListener("click", async function (e) {
  try {
    e.preventDefault();
    const seleksi = await fetchL();
    menyeleksiUser(seleksi);
  } catch (err) {
    alert(err);
  }
});

function fetchL() {
  return fetch("http://localhost:3000/semuauser")
    .then((res) => res.json())
    .then((data) => {
      return data.values;
    });
}

function menyeleksiUser(e) {
  for (const element of e) {
    if (
      element.username === username.value &&
      element.password === password.value
    ) {
      frm.setAttribute("action", "/index");
      frm.submit();
      return false;
    }
  }
  alert("Invalid username or password");
}
