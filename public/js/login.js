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
  const data = await fetchL();
  const seleksi = await menyeleksiUser(data.values);
  console.log(seleksi);
  if (!seleksi) {
    alert("Invalid Username or Password");
    e.preventDefault();
  } else {
    alert("berhasil login");
    frm.setAttribute("action", "/index");
    frm.submit(); // Kirim formulir secara programatik
    return false;
  }
});

function fetchL() {
  return fetch("http://localhost:3000/semuauser")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

function menyeleksiUser(e) {
  for (const element of e) {
    if (
      element.username === username.value &&
      element.password === password.value
    ) {
      console.log("hallo");
      return true; // Username sudah ada, hentikan pemrosesan
    }
  }
  return false;
}
