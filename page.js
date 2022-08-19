let sumbitBtn = document.getElementById("submit");

sumbitBtn.onclick = function (e) {
  let nama = document.getElementById("nama").value;
  let usia = document.getElementById("usia").value;
  let lomba = document.getElementById("pilih-permainan").value;
  let gender = document.getElementById("jenis-kelamin").value;
  let berat = document.getElementById("weight").value;

  if (usia > 17) {
    alert("Lu ketuaan bos ku!!");
  } else {
    document.getElementById("namaValue").innerHTML = nama;
    document.getElementById("usiaValue").innerHTML = usia;
    document.getElementById("lombaValue").innerHTML = lomba;
    document.getElementById("genderValue").innerHTML = gender;
    document.getElementById("beratValue").innerHTML = berat;

    let newDiv = document.createElement("div");
    newDiv.className = "cta";
    newDiv.id = "cta";
    document.getElementById("book").appendChild(newDiv);

    let newP = document.createElement("p");
    newP.innerHTML = "Apakah kamu sudah yakin dengan pilihanmu?";
    newP.className = "sure";

    document.getElementById("cta").appendChild(newP);

    let el = document.getElementById("audioNotifikasi");
    el.volume = 0.1;

    let newSubmit = document.createElement("button");
    newSubmit.innerText = "Send";
    newSubmit.className = "ubah-btn";
    newSubmit.id = "send";
    document.getElementById("cta").appendChild(newSubmit);

    let newButton = document.createElement("button");
    newButton.innerText = "Ubah Pilihan";
    newButton.className = "ubah-btn";
    newButton.id = "delete-btn";
    document.getElementById("cta").appendChild(newButton);

    newSubmit.onclick = function () {
      let announce = document.getElementById("announce");
      el.play();

      if (announce.className == "hide") {
        announce.className = "show";
      }
    };

    newButton.onclick = function () {
      window.location.reload();
      el.pause();
    };
  }
};
