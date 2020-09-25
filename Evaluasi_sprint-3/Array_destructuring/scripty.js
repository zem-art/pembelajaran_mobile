// rest variabel itu mengunakan titik tiga

// pertama buat nilai dari isi variabel const nya
let santriIkhwan = ["sidik", "rahmad", , , "sofyan", "aldi", "kardi", "Usamah"];

// buat nama variabel (diketauhi nya)
const [Lampung, Prabumulih, Medan, Ceribon, ...Lain] = santriIkhwan;

// panggil nama variabelnya

console.log(Lampung);
console.log(Prabumulih);
console.log(Lain);
