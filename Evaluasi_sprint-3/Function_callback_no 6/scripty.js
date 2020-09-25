function mentroProgrammer(nama, status, asal) {
  console.log(`nama mentor${nama}`);
  status(), asal();
}
function status() {
  console.log("Statusnya santri");
}
function asal() {
  console.log("Berasal dari kota prabumulih ");
}
mentroProgrammer("wandi pratama", status, asal);
