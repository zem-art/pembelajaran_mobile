// menampilkan array yg tersembunyi

const data = [
  "rizal", // element ke satu
  "prabumulih", // elment ke dua

  // array yg tersembunyi

  ["smk negeri prabumulih", "prabujaya", "sukajadi"],
];

// destruction yang nanti nya di panggil

const [nama, asal, ...sekolah] = data; // nama variabelnya

console.log(nama);
console.log(asal);
console.log(sekolah);
