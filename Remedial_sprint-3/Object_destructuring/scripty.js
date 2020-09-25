const asalSantri = {
  Sidik: "Lampung",
  Wandi: "Prabumulih",
  Rahmad: "Medan",
  Usamah: "Ceribon",
  Syofyan: "Purwokerto",
  Aldi: "Kendari",
  Kardi: "Lombok",
};

const { Sidik, Wandi, Rahmad, Usamah, ...other } = asalSantri;

console.log(Sidik, Wandi, Rahmad, Usamah);
console.log(other);
