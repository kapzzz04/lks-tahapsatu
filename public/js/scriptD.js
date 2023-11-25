const tombol = document.querySelector("nav .container .bersatu button.btn-n ");
const ulT = document.querySelector("nav .container .navbar-bar");
const btnClose = document.querySelector(".btn-close");

tombol.addEventListener("click", function () {
  ulT.style.display = "flex";
});

btnClose.addEventListener("click", function () {
  ulT.style.display = "none";
});

// registrasi menerima data dari user
const btnD = document.querySelector(".btn-d");
const nama = document.querySelector(".i-name");
const username = document.querySelector(".i-username");
const pas = document.querySelector(".i-password");
const hobi = document.querySelector(".i-hobi");
const alamat = document.querySelector(".i-alamat");
const inputL = document.querySelector(".input-L");
const frm = document.querySelector("form");

btnD.addEventListener("click", async function () {
  if (
    nama.value.length > 7 &&
    username.value.length > 7 &&
    pas.value.length > 7 &&
    alamat.value.length > 7 &&
    hobi.value.length > 2 &&
    inputL.value.length > 7
  ) {
    const uss = await fetchL();
    const bool = menyeleksiUser(uss.values);
    if (!bool) {
      console.log("haloo");
      alert("berhasil registrasi");
      const user = {
        nama: nama.value,
        username: username.value,
        password: pas.value,
        alamat: alamat.value,
        hobi: hobi.value,
        jeniskelamin: inputL.value,
      };
      await fetchF(user);
    }
  } else {
    alert("Lengkapi seluruh data");
  }
});

function fetchF(user) {
  return fetch("http://localhost:3000/tambah", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((e) => {
      return e;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function fetchL() {
  return fetch("http://localhost:3000/semuauser")
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function menyeleksiUser(e) {
  for (const element of e) {
    if (element.username == username.value) {
      alert("Username sudah digunakan, cari username lain");
      return true; // Username sudah ada, hentikan pemrosesan
    }
  }
  return false; // Username belum ada, lanjutkan pemrosesan
}

// ini kode salah yg atas kode berhasil
// btnD.addEventListener("click", async function () {
//   if (
//     nama.value.length > 7 &&
//     username.value.length > 7 &&
//     pas.value.length > 7 &&
//     alamat.value.length > 7 &&
//     hobi.value.length > 2 &&
//     inputL.value.length > 7
//   ) {
//     const uss = await fetchL();
//     const bool = await menyeleksiUser(uss.values);
//     console.log(bool);
//     if (bool === false) {
//       const user = {
//         nama: nama.value,
//         username: username.value,
//         password: pas.value,
//         alamat: alamat.value,
//         hobi: hobi.value,
//         jeniskelamin: inputL.value,
//       };
//       fetchF(user);
//       frm.setAttribute("action", "/masuk");
//     } else {
//       alert("kok gabisa");
//     }
//   } else {
//     alert("Lengkapi seluruh data");
//   }
// });

// function fetchF(user) {
//   return fetch("http://localhost:3000/tambah", {
//     method: "POST",
//     body: JSON.stringify(user),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((res) => res.json())
//     .then((e) => {
//       return e;
//     });
// }

// function fetchL() {
//   return fetch("http://localhost:3000/semuauser")
//     .then((res) => res.json())
//     .then((data) => {
//       return data;
//     });
// }

// function menyeleksiUser(e) {
//   return e.forEach((element) => {
//     if (element.username == username.value) {
//       alert("Username sudah digunakan, cari username lain");
//       return true;
//     } else {
//       return false;
//     }
//   });
// }
