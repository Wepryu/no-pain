const lst1 = [1,2,3,4]

const lstKaresi = []

lst1.forEach(pvtDizi1=>{
    console.log(pvtDizi1)
})

lst1.forEach(pvtDizi1=>{

    lstKaresi.push(pvtDizi1*pvtDizi1)
})

function yazdir(prmLst){
    prmLst.forEach(pvtDizi1=>{
        console.log(pvtDizi1)
    })
}
yazdir(lstKaresi)

var yazdir2 =(prmLst)=>{
    prmLst.forEach(pvtDizi1=>{
        console.log(pvtDizi1)
    })
}
yazdir2(lstKaresi)
//map
const lstKaresiMap = lst1.map(pvtDizi1=>pvtDizi1*pvtDizi1) // tek satırda yazılmak zorunda  aşağıdaki yorum satırı yanlış olanı
// const lstKaresiMap = lst1.map(pvtDizi1=>{pvtDizi1*pvtDizi1})  // süslü parantez kalkmalı
console.log(lstKaresiMap)

//filter
const lstFiltre = lst1.filter(pvtDizi1=>pvtDizi1>2)
console.log(lstFiltre)

//reduce

const lstReduce = lst1.reduce((acc,pvtDizi1)=>{
    return acc+ pvtDizi1
})
console.log(lstReduce)

const lstReduce2 = lst1.reduce((acc,pvtDizi1)=>{
    return acc+ pvtDizi1
},5)
console.log(lstReduce2)