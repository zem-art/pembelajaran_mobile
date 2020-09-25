var listDesa = [
  "argodadi,sedayu",
  "argomulyo,sedayu",
  "argorejo,sedayu",
  "argosari",
  "bangunjiwo,kasihan",
  "banguntapan,banguntapan",
  "bantul,bantul",
  "baturetno,banguntapan",
  "bawuran,pleret",
  "canden,jetis",
  "caturharjo,pandak",
  "cetan srigandi",
];

// ol menapilkan list / dan angka
document.write("<ol>");

// i = var

// listDesa.length untuk menjabar element didalam array

for (var i = 0; i < listDesa.length; i++) {
  document.write("<li>", listDesa[i], "</li>");
}
document.write("</ol>");

// cara Kedua membuat nya

// cara membuat list cara kedua

/*
var listDesa = [
  "argodadi,sedayu",
  "argomulyo,sedayu",
  "argorejo,sedayu",
  "argosari",
  "bangunjiwo,kasihan",
  "banguntapan,banguntapan",
  "bantul,bantul",
  "baturetno,banguntapan",
  "bawuran,pleret",
  "canden,jetis",
  "caturharjo,pandak",
  "cetan srigandi",
];

// ol untuk memberikan no
document.write("<ol>");

// i penulisan cara singkat dari rumus for

// in memasukan semua element kedalam for dan memasukan nama var

for (i in listDesa) {
  // aksi nya didalam kurung kurawal

  document.write("<li>" + listDesa[i] + "</li>");
}

document.write("</ol>");
*/
