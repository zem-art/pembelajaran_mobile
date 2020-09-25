var nilaiSantri = [10, 30, 55, 66, 77, 53, 14, 13];

// untuk memulai dari 0

var hasil = 0;

// length umtuk mengetahui berapa jumlah element didalam array

for (i = 0; i < nilaiSantri.length; i++) {
  // kenapa harus pakai [i] untuk mengantisipasi agar tidak ter jadi perulangan di dalam array

  console.log(nilaiSantri[i]);

  //hasil di tambah nilaisantri

  hasil += nilaiSantri[i];
}
// rumus rata rata hasil hasil di bagi nilai semuanya nya
document.write(hasil / nilaiSantri.length);
