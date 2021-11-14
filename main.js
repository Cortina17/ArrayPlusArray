// ## Array Plus Array 
// Obtener la suma de dos matrices / arrays ... en realidad, la suma de todos sus elementos

// PD: Cada matriz incluye solo números enteros. La salida también es un número.
// 
// Tenéis que conseguir sumar dos arrays
// let firstArr = [1, 2, 3];
//         let secondArr = [4, 5, 6];
// toEqual(21)
// let firstArr = [-1, -2, -3];
//         let secondArr = [-4, -5, -6];
// toEqual(-21)

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [-1, -2, -3];
let array4 = [-4, -5, -6];

const reducer = (a, b) => a + b;

console.log(array1.reduce(reducer) + array2.reduce(reducer));

console.log(array3.reduce(reducer) + array4.reduce(reducer));

