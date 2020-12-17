const name = [
  'Abigail','Alexandra','Alison',
  'Amanda','Angela','Bella',
  'Carol','Caroline','Carolyn',
  "a'Deirdre",'Diana','Elizabeth',
  'Ella','Faith','Olivia','Penelope'
]

// function searchName
function searchName (element, index, output) {  
  // filter Element dalam Array 
  const filtered = name.filter(el => el.toLowerCase().indexOf(element.toLowerCase()) > -1)
  console.log(filtered)
  
  // memotong isi element pada array
  const sliced = filtered.slice(0, index)
  // cetak variabel output data dari fanction ini
  const hasil = sliced
  output(hasil)
}

const callback = (hasil) => {
  // cek isi element dalam array
  // console.log(`${hasil.length}`)
  // Logika if else
  if (hasil.length > 0){
    console.log(hasil)
  } else {
    console.log('"Oops nama tidak ditemukan!"')
  }
}

searchName("to", 3, callback)