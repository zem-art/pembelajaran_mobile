// const asalSantri = {
//   Sidik: "Lampung",
//   Wandi: "Prabumulih",
//   Rahmad: "Medan",
//   Usamah: "Ceribon",
//   Syofyan: "Purwokerto",
//   Aldi: "Kendari",
//   Kardi: "Lombok",
// };
// const { Sidik, Wandi, Rahmad, Usamah, Syofyan, Aldi, Kardi } = asalSantri;

// console.log(Sidik, Wandi, Rahmad, Usamah);

// console.log(asalSantri);

const asalSantri = {
  Sidik: "Lampung",
  Wandi: "Prabumulih",
  Rahmad: "Medan",
  Usamah: "Ceribon",
  Syofyan: "Purwokerto",
  Aldi: "Kendari",
  Kardi: "Lombok",
};

const { Sidik, Wandi, Rahmad, Usamah, ...lain } = asalSantri;

console.log(Sidik, Wandi, Rahmad, Usamah);

console.log(lain);
