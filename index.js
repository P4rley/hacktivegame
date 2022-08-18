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

  let announce = document.getElementById("announce");

  if (announce.className == "hide") {
    announce.className = "show";
  }
};

let el = document.getElementById("audioNotifikasi"); 
  function playAudio() { 
    el.play(); 
  } 
  function pauseAudio() { 
    el.pause(); 
  } 