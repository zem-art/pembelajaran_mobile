// perulangan for dan while

//perulangan menghitung normal

// ++ menambah 1 kali
// += menambah 2 kali

// for (i = 0; i < 6; i++) {
//   document.write(`perulanga yang ke ${i} kali `);

//   //memberikan space
//    document.write("<br>");
// // }

//  document.write("<br>");

// // // perulangan mengitung terbalik

//  for (a = 8; a > 0; a--) {
//    document.write(`perulangan sebanyak ${a} kali `);

// //   // meberikan space
//  document.write("<br>");
//  }

// document.write("<br>");

//PERULANGAN WHILE

// confirm sama dengan prompt

var c = confirm(`mau mengulaingi nya `);

// var b untuk mengisi perulangn sebanyak yg kita klik

var b = 0;

// kondisi nya a

while (c) {
  // var b diulang-ulang
  b++;

  c = confirm(`mau mengulainga nya`);
}

document.write(`perulangan di baca sebanyak ` + b + `kali`);
