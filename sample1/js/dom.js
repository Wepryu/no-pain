var dom1 = () => {
  // console.log("basarili")
  document.getElementById("btnDoom1").style.display = "none";
  document.getElementById("btnDoom2").style.display = "";
};

var dom2 = () => {
  // console.log("basarili")
  document.getElementById("btnDoom2").style.display = "none";
  document.getElementById("btnDoom1").style.display = "";
};
let mailStr = "";
function mOver(prmObj) {
  this.mailStr = prmObj.innerHTML;
  prmObj.innerHTML = "Elinle yaz elinle . Kopyalama ";
}

function mOut(prmObj) {
  prmObj.innerHTML = this.mailStr;
}

var lstKisi = [
  {
    name: "Timurhan KOCABAŞ",
    pozisyon: "Yazılım Geliştirici",
    mail: "timurhankocabas@gmail.com"
  },
  {
    name: "Sıdıka KOCABAŞ",
    pozisyon: "Yazılım Geliştirici",
    mail: "sidikakocabas@gmail.com"
  },
  {
    name: "Tuğrul KOCABAŞ",
    pozisyon: "Yazılım Geliştirici",
    mail: "tugrulkocabas@gmail.com"
  },
  {
    name: "Oğuzhan KOCABAŞ",
    pozisyon: "Yazılım Geliştirici",
    mail: "kocabasoguzhan@gmail.com"
  }, {
    name: "Pınar KOCABAŞ",
    pozisyon: "Yazılım Geliştirici",
    mail: "pinarkocabas@gmail.com"
  }
  
];

var kisiDiv = "";
function kisileriYazdir() {
this.kisiDiv="";
  lstKisi.forEach(element => {
    this.kisiDiv =
      this.kisiDiv +
      '<div class="col-lg-4 mb-4"><div class="card h-100 text-center"><img class="card-img-top" src="http://placehold.it/750x450" alt=""><div class="card-body"><h4 class="card-title">' +
      element.name +
      '</h4><h6 class="card-subtitle mb-2 text-muted">Pozisyon</h6><p class="card-text">' +
      element.pozisyon +
      '</p></div><div class="card-footer"><a href="#" id="mail_0" onmouseover="mOver(this)" onmouseout="mOut(this)">' +
      element.mail +
      "</a></div></div></div>";
  });
  //   console.log(this.kisiDiv)
  document.getElementById("kisiDv").innerHTML = this.kisiDiv;
}
