// object finction deklarasi

function laptop(nama, tipe, speak) {
  var sisir = {};
  sisir.ayo = nama;
  sisir.bkn = tipe;
  sisir.la = speak;
  return laptop;
}

//memanggil object

console.log(laptop("alien ware", 6789, "gaming"));

// mengunakan object literal

var siswa = { nama: "hanif", usia: 19 };

// memanggil object

document.write(siswa.usia);
