
// const readlinesync = require("readline-sync")
// let n = readlinesync.questionInt("Enter the value of n: ");
// let m = readlinesync.questionInt("Enter the value of m: ");

// let array = [];
// for (let i = 0; i < n; i++) {
//     array[i] = readlinesync.questionInt("Enter the element of array: ");
// }
// let array2 = [];
// for (let i = 0; i < m; i++) {
//     array2[i] = readlinesync.questionInt("Enter the element of array2: ");
// }


// let empty = [];
// for (let i = 0; i < n; i++) {
//     empty[i] = array[i];
// }
// for (let j = 0; j < m; j++) {
//     empty[n + j] = array2[j];
// }

// console.log( empty);










const readlinesync = require("readline-sync")
let n = readlinesync.questionInt("Enter the value of n: ");
let m = readlinesync.questionInt("Enter the value of m: ");

let array = [];
for (let i = 0; i < n; i++) {
    array[i] = readlinesync.questionInt("Enter the element of array: ");
}
let array2 = [];
for (let i = 0; i < m; i++) {
    array2[i] = readlinesync.questionInt("Enter the element of array2: ");
}


let empty = [];
for (let i = 0; i < n; i++) {
    empty[i] = array[i];
}
for (let j = 0; j < m; j++) {
    empty[n + j] = array2[j];
} 



let samreen=[];
for(i=0; i<n; i++){
    samreen=[]
}



console.log( empty);
