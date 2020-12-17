function SeleksiNilai (nilaiAwal,nilaiAkhir,array) {

  if ((typeof(nilaiAwal) === "number") && (typeof(nilaiAkhir) === "number")) {
    // 
    const parameter = (batas => batas>= nilaiAwal && batas<= nilaiAkhir)

    // fiter element dataArray
    const filtered = array.filter(parameter) 

    // mengurutkan berdasarkan descending
    const numberSorter = (a,b) => a-b
    // sort element dgan function perbandingan
    const sorted = filtered.sort(numberSorter)

    if (nilaiAwal < nilaiAkhir) {
      if (sorted.length > 0) {
        console.log(sorted)
      } else {
        console.log(`"Jumlah angka dalam dataArray tidak ada"`)
      }
    } else if (nilaiAwal > nilaiAkhir) {
      console.log(`"Nilai akhir harus lebih besar dari nilai Awal"`)
    } else {
      console.log(`"Nilai awal sama dengan nilai akhir"`)
    }
  } else {
    console.log(`"Nilai Awal dan Akhir harus number"`)
  }
}

const dataArray = [2,25,4,14,17,30,8]
SeleksiNilai(5, 20, dataArray)
// const dataArray = [2,25,4]
// SeleksiNilai(5, 17,dataArray)
