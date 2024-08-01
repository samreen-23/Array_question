const readlinesync=require("readline-sync");
let n= readlinesync.questionInt("enter the value of n");
let array=[];
for ( let i=0; i<n ; i++ );{
array[i]=readlinesync.questionInt(" enter the element of array");
}
let i
for(i=0; i<n; i++){
    let count=1
     
     for (let j=i+1; j<n ; j++){
        if(array[i]===array[j]){
        count++;
        }
     }
     console.log(array[i],count)
}
