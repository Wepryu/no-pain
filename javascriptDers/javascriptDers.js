let lstKisi = [
  {
    firstName: "Oğuzhan",
    lastName: "Kocabaş",
    email: "kocabasoguzhan@gmail.com",
    sifre: "123on!!",
    friends: ["Tuğrul", "Sıdıka"]
  },
  {
    firstName: "Sıdıka",
    lastName: "Kocabaş",
    email: "sidikakocabas@gmail.com",
    sifre: "123sa!!",
    friends: ["Tuğrul", "Oğuzhan"]
  },
  {
    firstName: "Tuğrul",
    lastName: "Kocabaş",
    email: "tugrulkocabas@gmail.com",
    sifre: "123tl!!",
    friends: ["Sıdıka", "Oğuzhan"]
  }
];
let lstTvit = [
  {
    email: "kocabasoguzhan@gmail.com",
    alert: function() {
      this.alert("Ben Oğuzhan Kocabaş' ım");
    },
    tvitInscription: "Merhaba güzel dünya. ben oğuzhan"
  },

  {
    email: "sidikakocabas@gmail.com",
    alert: function() {
      this.alert("Ben Sıdıka Kocabaş' ım");
    },
    tvitInscription: "Merhaba güzel dünya. ben Sıdıka"
  },
  {
    email: "tugrulkocabas@gmail.com",
    alert: function() {
      this.alert("Ben Tuğrul Kocabaş' ım");
    },
    tvitInscription: "Merhaba güzel dünya. ben  Tuğrul"
  }
];
function kimlikDogrulama() {
  let emailGirilen = prompt("Lütfen mail adresinizi giriniz");
  let sifreGirilen = prompt("Lütfen sifrenizi giriniz");
  // var girisDurum = lstKisi.map(pvtKisi => pvtKisi.email === emailGirilen && pvtKisi.sifre === sifreGirilen)

  // for (let index = 0; index < lstKisi.length; index++) {
  //     const pvtKisi = lstKisi[index];
  //     if(pvtKisi.email === emailGirilen && pvtKisi.sifre === sifreGirilen){
  //         console.log("Giris Basarili")
  //         console.log(lstTvit)
  //         return
  //     }else{
  //         console.log("Basarisiz Giris")
  //     }
  // }

  lstKisi.forEach(function(pvtKisi) {
    if (pvtKisi.email === emailGirilen && pvtKisi.sifre === sifreGirilen) {
        console.log("Giris Basarili")
        lstTvit.map(pvtTvit=>console.log(pvtTvit.tvitInscription))
    } else {
        console.log("Basarisiz Giris")
    }
  });
}
kimlikDogrulama();
