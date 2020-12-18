// var fruits = ['Apple', 'Banana', 'Grapes', 'Mango', 'Orange'];

// /**
//  * Array filters items based on search criteria (query)
//  */
// function filterItems(query) {
//   return fruits.filter( el => el.toLowerCase().indexOf(query.toLowerCase()) > -1)
// }

// console.log(filterItems('AP')); // ['apple', 'grapes']
// console.log(filterItems('an')); // ['banana', 'mango', 'orange']

// const todo = (test, callback) => {
//   const respon = `Hai ${test}`
//   callback(respon)
// }

// todo2 = (respon) => {
//   console.log(respon)
// }

// todo("Tomi", todo2)

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
