// Method array (built-in function)
// 1. filter() berfungsi untuk membuat array baru berisi elemen yang lolos pengecekan di dalam fungsi anonim yang dikirim sebagai parameter.

// ES5
// const namaMahasiswa = ["Adi","Ziva","Cika","Muhammad","Hidayatullah","Robby","Tika","Budi"]
// const pjgKata = namaMahasiswa.filter( function(namaMahasiswa){
//   return namaMahasiswa.length > 4
// })

// ES6
const namaMahasiswa = ["Adi","Budi","Cika","Muhammad","Hidayatullah","Robby","Tika","Ziva"]
const pjgKata = namaMahasiswa.filter(namaMahasiswa => namaMahasiswa.length > 4)

// console.log(pjgKata)
// console.log(...pjgKata)


// 2. sort() digunakan untuk mengurutkan element array dan mengembalikan ke bentuk array hasil element yang telah diurutkan.
// const urutkanKata = namaMahasiswa.sort() // mengurutkan element array namaMahasiswa
const urutkanKata = pjgKata.sort()
// console.log(urutkanKata)
// console.log(...urutkanKata)

// const angka = [5,3,2,8,10,12]
// sortir element array berdasarkan ascending
// const ascending = angka.sort()
// console.log(ascending)

// sortir element array berdasarkan descending
// const sortir = (a,b) => a-b
// const descending = angka.sort(sortir)
// console.log(descending)


// 3. map() membuat array baru yang diisi dengan hasil pemanggilan fungsi yang disediakan pada setiap elemen dalam array pemanggil.

// const arrAngka = [1,4,9,16]
// const hasil = arrAngka.map( function(perkalianArr){
//   return perkalianArr*2
// })
// const hasil = arrAngka.map( perkalianArr => perkalianArr*2 )
// console.log(hasil)

const arrBuah = ['Appel', 'Pisang', 'Durian', 'Semangka']
const mapBuah = arrBuah.map( (element, index, array) => `buah ${element} berada pada index ${index} dari array ${array}`)
// console.log(mapBuah) 


// 4. push() digunakan untuk menambahkan satu atau lebih elemen ke akhir element array dan mengembalikan panjang array yang baru.
const arrHewan = ['Ayam', 'Angsa', 'Kucing']
// console.log(arrHewan)
// const tambahHewan = arrHewan.push('Ular', 'Gajah')
// console.log(tambahHewan) //akan menampilkan jumlah element dalam array
// console.log(arrHewan)

// let arrNumber = [1,5,10,15]
// let inputNumber = arrNumber.push(20,25,30)
// console.log(arrNumber)


// 5. forEach() digunakan untuk menjalankan fungsi yang disediakan satu kali untuk setiap elemen array.
const arrHuruf = ['x','y','z']
// arrHuruf.forEach(function(callback){
//   console.log(callback)
// })
// arrHuruf.forEach((callback)=> {
//   console.log(callback)
//   // return `${callback}`
// })
// arrHuruf.forEach(callback => console.log(callback))
// arrHuruf.forEach((element, index, array) => console.log(`element ${element} berada pada index ke-${index} didalam array ${array}`))

// 6. reverse() digunakan untuk membalikkan array pada tempatnya. Element array pertama menjadi yang terakhir, dan elemen array terakhir menjadi yang pertama.     
// // console.log(arrHuruf)
// const reversed = arrHuruf.reverse()
// console.log(reversed)
// console.log(arrHuruf)


// 7. flat() digunakan untuk membuat array baru dengan semua element sub array digabungkan ke dalamnya secara rekursif hingga kedalaman yang ditentukan.
// const arrA = [1,2,3]
// const arrB = [[[4,5]]]
// const arrAB = [...arrA, arrB]
// console.log(arrAB)
// console.log(arrAB.flat(3))


// 8. find() digunakan untuk mengembalikan nilai element pertama dalam array yang memenuhi fungsi pengujian . Jika tidak ada nilai yang memenuhi fungsi pengujian, maka akan mengebalikan nilai undefined.
// const arr = [4,6,10,12,20]
// const cari = arr.find( callback => callback <5)
// console.log(cari)
// const nama = ['Paijo','Joko','Bambang']
// const cari = nama.find( callback => callback.length > 4)
// console.log(cari)


// 9. join() membuat dan mengembalikan string baru dengan menggabungkan semua element dalam array, dipisahkan dengan koma atau string pemisah yang ditentukan. Jika array hanya memiliki satu item, maka item tersebut akan dikembalikan tanpa menggunakan pemisah.
// const avatar = ['Api','Udara','Air','Tanah']
// const output = avatar.join(' - ')
// console.log(avatar)
// console.log(output)


// 10. splice() mengubah konten array dengan menghapus atau mengganti element yang ada atau menambahkan element baru pada tempatnya
// const bulan = ['Jan','Mar','Apr','Juni']
// // splice (index, insert/replace, value element)
// bulan.splice(1,0,'Feb')
// console.log(bulan)
// bulan.splice(4,1,'Mei')
// console.log(bulan)