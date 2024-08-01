const readlinesync=require("readline-sync");
let n = readlinesync.questionInt("enter the value of n");

let L=[]
for(let i =0; i < n; i++){
     (L[i])=readlinesync.questionInt(" enter the element: ");
}
console.log(L);

let max =L[0];
for(let i=1; i < n; i++){

    if(L[i] > max)
        {
         max=L[i]
        } 

}
console.log(" the value of max is ", max);


let min=L[0]
for(let i=1; i < n; i++){
    if(L[i] < min){
        min=L[i];
    }
}
console.log(" the value of min is" ,min);





