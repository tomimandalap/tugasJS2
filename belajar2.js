// Method pada object
// const mahasiswa = {
//   method1: function() {
//     return "Method ke 1"
//   }
// }
// menampilkan object
// console.log(mahasiswa)

// menampilkan isi property dalam objek
// console.log(mahasiswa.method1)

// menampilkan function dalam objek
// console.log(mahasiswa.method1())

// Method Build-in function 
// 1. sort()

// const arrayBuah = ['Apel', 'Mangga', 'Jeruk']
// menampilkan isi dalam array
// console.log(arrayBuah)

// menampilkan isi dalam array tapa tanda petik
// console.log(...arrayBuah)
// console.log(...arrayBuah.sort())

// const arrAngka = [10,8,12,6,14,4]
// console.log(...arrAngka) 
// console.log(...arrAngka.sort())

// 2. map()
// ES5
// const angka = [1,2,3,4,5];
// const totalAngka = angka.map(function(number){
//      return number * 2;
// })
// console.log(totalAngka);

// const makanan = ['sate', 'bakso', 'mie ayam', 'soto ayam']
// const listMakanan = makanan.map( function (element, index, array) {
//      return `${index} menunya adalah ${element} dari menu ${array}`
// })
// console.log(listMakanan)

// ES6
// const angka = [1,2,3,4,5];
// const totalAngka = angka.map( (number) => {
//      return number * 2;
// })
// console.log(totalAngka);

// const makanan = ['sate', 'bakso', 'mie ayam', 'soto ayam']
// const listMakanan = makanan.map( (element, index, array) => {
//      return `${index} menunya adalah ${element} dari menu ${array}`
// })
// console.log(listMakanan)

// 3. filter()
// const arrData = [1,2,3,4,5]
// const arrBaru = arrData.filter(function(element, i, array){
//   return (element % 2 === 0)
// })
// console.log(arrBaru)

// kode ES5
// var arrLama= ["andi", "cici", "riko", "steven", "endi", "hilman"];

// var arrBaru = arrLama.filter(function(kata){
//   return kata.length > 4;
// })
// console.log(arrBaru)

// es6
// const arrLama= ["andi", "cici", "riko", "steven", "endi", "hilman"];
// const arrBaru = arrLama.filter(kata => kata.length > 4);
// console.log(arrBaru)

// push()

// callback Function
function sayHello (name, callback) {
     let ucapkan = `Helo ${name}`
     callback(ucapkan)
}

function show (quote){
     console.log(quote)
}

sayHello("Tomi",show)