var listKota = [
  "Kabupaten Aceh Barat",
  "Kabupaten Aceh Barat Daya",
  "Kabupaten Aceh Besar",
  "Kabupaten Aceh Jaya",
  "Kabupaten Aceh Selatan",
  "Kabupaten Aceh Singkil",
  "Kabupaten Aceh Tamiang",
  "Kabupaten Aceh Tengah",
  "Kabupaten Aceh Tenggara",
  "Kabupaten Aceh Timur",
  "Kabupaten Aceh Utara",
  "Kabupaten Bener Meriah",
  "Kabupaten Bireuen",
  "Kabupaten Gayo Lues",
  "Kabupaten Nagan Raya",
  "Kabupaten Pidie",
  "Kabupaten Pidie Jaya",
  "Kabupaten Simeulue",
  "Kota Banda Aceh",
  "Kota Langsa",
  "Kota Lhokseumawe",
  "Kota Sabang",
  "Kota Subulussalam",
  [
    "Kabupaten Badung",
    "Kabupaten Bangil",
    "Kabupaten Buleleng",
    "Kabupaten Gianyar",
    "Kabupaten Banjarnegara",
    "Kabupaten Banyumas",
    "Kabupaten Batang",
    "Kabupaten Blora",
    "Kabupaten Boyolali",
    "Kabupaten Brebes",
    "Kabupaten Cilacap",
    "Kabupaten Demak",
    "Kabupaten Grobogan",
    "Kabupaten Jepara",
    "Kabupaten Karanganyar",
    "Kabupaten Kebumen",
    "Kabupaten Kendal",
    "Kabupaten Klaten",
    "Kabupaten Kudus",
    "Kabupaten Magelang",
    [
      "Kabupaten Bengkayang",
      "Kabupaten Kapuas Hulu",
      "Kabupaten Kayong Utara",
      "Kabupaten Ketapang",
      "Kabupaten Kubu Raya",
      "Kabupaten Landak",
      "Kabupaten Melawi",
      "Kabupaten Pontianak",
      "Kabupaten Sambas",
      "Kabupaten Sanggau",
      "Kabupaten Sekadau",
      "Kabupaten Sintang",
      "Kota Pontianak",
      "Kota Singkawang",
    ],
    "Kabupaten Pati",
    "Kabupaten Pekalongan",
    "Kabupaten Pemalang",
    "Kabupaten Purbalingga",
    "Kabupaten Purworejo",
    "Kabupaten Rembang",
    "Kabupaten Semarang",
    "Kabupaten Sragen",
    "Kabupaten Sukoharjo",
    "Kabupaten Tegal",
    "Kabupaten Temanggung",
    "Kabupaten Wonogiri",
    "Kabupaten Wonosobo",
    "Kota Magelang",
    "Kota Pekalongan",
    "Kota Salatiga",
    "Kota Semarang",
    "Kota Surakarta",
    "Kota Tegal",
    "Kabupaten Jembrana",
    "Kabupaten Karangasem",
    "Kabupaten Klungkung",
    "Kabupaten Tabanan",
    "Kota Denpasar",
  ],
];

// untuk melihat elemant dalam array

//console.log(listKota);

// untuk memanggil nama array dan dan element di dalam nya

var kota = listKota[23][20];

// membuat number

document.write("<ol>");

//  <li> untuk membuat list

for (b = 0; b < kota.length; b++) {
  document.write("<li>", kota[b], "</li>");
}
document.write("</ol>");
