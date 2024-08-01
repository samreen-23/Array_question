const readlinesync=require("readline-sync");
let n= readlinesync.questionInt("enter the size of array");



// let L=[34, 56, 78, 23,77, 67, 92,88];
// for(let i =0; i <8; i++){
//     console.log(L[i]);

    
// }
let L=[];
for(let i =0; i <n; i++){
    L[i]=readlinesync.questionInt("enter the element :");
    
        
}
for(let i =0; i <n; i++){
    console.log(L[i]);

    
}
// console.log([L]);