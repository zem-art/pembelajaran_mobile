var kodeUnixRandom = [
  12,
  78,
  42,
  40,
  36,
  2,
  8,
  96,
  66,
  20,
  91,
  85,
  41,
  69,
  38,
  77,
  97,
  60,
  15,
  57,
];

// acc sama cuv nya jangn lupa di kurung dulu biar ngeluping dan nantinya di bagi

console.log(
  kodeUnixRandom.reduce((acc, cuv) => (acc + cuv) / kodeUnixRandom.length)
);
