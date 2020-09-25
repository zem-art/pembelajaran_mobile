var nilai = [5, 9, 6, 7, 9, 8, 10, 7, 8];

var hasil = 0;

var angka = nilai.length;

for (i = 0; i < angka; i++) {
  document.write(i);

  hasil += nilai[i];
}
document.write(hasil / angka);
