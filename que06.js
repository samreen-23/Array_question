const readlinesync=require("readline-sync");


let n=readlinesync.questionInt("enter the value of n");
let array=[]
for(let i=0; i<n; i++){
array[i]=readlinesync.questionInt("enter the element of array:")
}

  let odd=0;
  let even=0;

for(let i=0; i<n; i++){
    if(array[i]%2==0){
        even+=array[i];
    }
    else{
        odd+=array[i];
    }       
}

console.log( even );
console.log( odd );