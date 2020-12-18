// syarat penulisan function selalu diakhir return untuk memberhentikan function tersebut
// penulisan function javascript ES5
// contoh deklarasi
// function mahasiswa (nama) {
//   return nama
// }

// console.log(mahasiswa ("Tomi"))

// ekspresi
// const mahasiswa = function(nama) {
//   return nama
// }

// console.log(mahasiswa("Joko"))

// penulisan function javascript ES6
// const mahasiswa = (nama) => {
//   return nama
// }

// console.log(mahasiswa("Putra"))

// const luasPersegi = (panjang, lebar) => {
//   let luas = panjang * lebar

//   return luas
// }

// inputan variabel nilai function luasPerseginya
// console.log(luasPersegi(10,2))
// console.log("Jadi luas perseginya adalah: "+luasPersegi(10,2))
// console.log(`Hasilnya adalah ${luasPersegi(10,2)}`) // template literal

const mahasiswa = (nama, npm, status) => {
  return console.log(`Nama saya ${nama} dengan NPM ${npm} status kuliah ${status}`)
}

console.log(mahasiswa("Tomi", 1517041135, false))
