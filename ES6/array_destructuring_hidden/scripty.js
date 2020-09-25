// array destruction

const person = { name: "rizal", asal: "Prabumulih" };

// cara simple destruc object / pemecahan object menjadi variabel & pemanggilans

({ name, asal } = person);

// aksi / pemanggilan

document.write(`nama saya ${name} asal saya dari ${asal}`);
