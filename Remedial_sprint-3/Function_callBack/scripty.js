function mentorProgrammer(nama, status, asal) {
  console.log(`Nama Mentor ${nama}`), status(), asal();
}
function status() {
  console.log(`stastus nya santri `);
}
function asal() {
  console.log(`Berasal dari kota Prabumulih `);
}
mentorProgrammer(`Wandi Pratama`, status, asal);
