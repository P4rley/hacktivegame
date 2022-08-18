let sumbitBtn = document.getElementById("submit");

sumbitBtn.onclick = function () {
  let nama = document.getElementById("nama").value;
  document.getElementById("namaValue").innerHTML = nama;

  let usia = document.getElementById("usia").value;
  document.getElementById("usiaValue").innerHTML = usia;

  let lomba = document.getElementById("pilih-permainan").value;
  document.getElementById("lombaValue").innerHTML = lomba;

  let gender = document.getElementById("jenis-kelamin").value;
  document.getElementById("genderValue").innerHTML = gender;

  let berat = document.getElementById("weight").value;
  document.getElementById("beratValue").innerHTML = berat;

  let newDiv = document.createElement("div");
  newDiv.className = "cta";
  newDiv.id = "cta";
  document.getElementById("book").appendChild(newDiv);

  let newP = document.createElement("p");
  newP.innerHTML = "Apakah kamu sudah yakin dengan pilihanmu?";
  newP.className = "sure";

  document.getElementById("cta").appendChild(newP);

  let newSubmit = document.createElement("button");
  newSubmit.innerText = "Send";
  newSubmit.className = "ubah-btn";
  document.getElementById("cta").appendChild(newSubmit);

  let newButton = document.createElement("button");
  newButton.innerText = "Ubah Pilihan";
  newButton.className = "ubah-btn";
  document.getElementById("cta").appendChild(newButton);

  newSubmit.onclick = function () {
    let announce = document.getElementById("announce");

    if (announce.className == "hide") {
      announce.className = "show";
    }

    newButton.remove();
  };

  newButton.onclick = function () {
    window.location.reload();
  };
};
