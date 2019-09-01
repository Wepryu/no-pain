
class kisi {
  isimYazdir = () => {
    console.log("Merhaba Dunya");
  };
}

const ornekKisi = new kisi();
ornekKisi.isimYazdir();

class personel {
  constructor(ad, soyad, yas, departman) {
    this.ad = ad;
    this.soyad = soyad;
    this.yas = yas;
    this.departman = departman;
  }

  personelEkle() {
    console.log("Personel Eklendi");
  };
  personelYazdir() {
    console.log(
      this.ad + " " + this.soyad + " " + this.yas + " " + this.departman
    );
  };
}

const ornPersonel = new personel();
ornPersonel.ad = "OGUZHAN";
ornPersonel.soyad = "KOCABAS";
ornPersonel.yas = 25;
ornPersonel.departman = "YAZILIM";
ornPersonel.personelEkle();
ornPersonel.personelYazdir();
