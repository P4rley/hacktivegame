function getData() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password === confirmPassword) {
    alert("Registrasi kamu berhasil bosku!!!");

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("confirmPassword", confirmPassword);
  } else {
    alert("Password kamu tidak sama bos!!!");
  }
}

let getAll = localStorage;
const localUsername = getAll.username;
const localPassword = getAll.password;

function check() {
  return true;
}

document.getElementById("submit-btn").addEventListener("click", function (e) {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (localUsername === username && localPassword === password) {
    alert("Silahkan masuk bosku!!!");
  } else {
    e.preventDefault();
  }
});
