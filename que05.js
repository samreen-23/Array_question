const readlinesync=require("readline-sync");


// let k=[,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// for(i=1; i <= 20; i++){
//     console.log(k[i]);
// }
let n= readlinesync.questionInt("enter the size ");
let count=1;
let array=[];
for ( let i =0; i < n ;i++){
    array[i]=count;
count++;
}
console.log(array);