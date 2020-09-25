var jualMobil = {
  name: true,
  iklan: function () {
    document.write(
      `Bu , saya ${this.name} , jual Mobil ${this.merek} ,tahun ${this.tahun} bekas `
    );
  },
};

var saya = Object.create(jualMobil);

(saya.name = "Tompel"), (saya.merek = "Avanza"), (saya.tahun = 2017);

saya.iklan();
