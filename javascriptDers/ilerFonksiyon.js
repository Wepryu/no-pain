var birFonksiyonOrnek = function selam (){
    console.log("Merhaba Dünya")
}

var birFonksiyonOrnek2 = (prm) => {
    // console.log("Napayim Bunlari")
    console.log(prm)
}

birFonksiyonOrnek()
birFonksiyonOrnek2()

var toplamaIslemi = (sayi1, sayi2)=> {return sayi1 + sayi2}
var yazdir = (prmYazilacak)=>{
    console.log(toplamaIslemi(3,5))
}
yazdir()