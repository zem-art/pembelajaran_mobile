function newCallback(nama, asal, pulang) {
  console.log(nama, asal);
  pulang();
}
function pulang() {
  console.log("pulang kampung");
}

newCallback("adi", "yusuf", pulang);
