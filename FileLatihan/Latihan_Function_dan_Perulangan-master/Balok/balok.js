// menghitung persegi dengan fungction mengunakan 3 parameter

function persegi(p2, l2, t2) {
  // Variabel
  p3 = 10;
  t3 = 5;
  l3 = 2;

  //Hasil
  jumlah = p2 * l2 * t2;
  luas = 2 * p2 * l2 + p2 * t2 + l2 * t2;

  //Return Untuk Mengembalikan Hasilnya
  return jumlah, luas;
}
persegi(10, 5, 2);
document.write(`MENGHITUNG LUAS DAN VOLUME BALOK<br>`);
document.write(`<br>Panjang: ${p3}<br>`);
document.write(`Lebar : ${l3}<br>`);
document.write(`Tinggi ${t3}<br>`);
document.write(`Volume Balok : ${jumlah}<br>`);
document.write(`Luas permukaan Balok : ${luas}<br>`);
