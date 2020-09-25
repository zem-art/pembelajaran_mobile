function santriProgrammer(nama, status, asal) {
  console.log(`nama santri ${nama} berasal dari kota ${asal}`);
  status();
}
function status() {
  alert("status saya adalah santri");
}
santriProgrammer("Rahmad", status, "Medan");
