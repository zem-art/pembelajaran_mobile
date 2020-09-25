var randomNumbers = [
  90,
  99,
  78,
  73,
  80,
  60,
  96,
  67,
  55,
  86,
  80,
  81,
  81,
  73,
  77,
  71,
  90,
  87,
  85,
  23,
  52,
  87,
  78,
  96,
  80,
  68,
];

var hasil = randomNumbers
  .filter((a) => a >= 65)
  .map((a) => a / 2)
  .filter((a) => a < 40)
  .map((a) => randomNumbers.length / a)
  .reduce((acc, cuv) => acc / 2 + cuv);

console.log(hasil);
