
const readlinesync=require("readline-sync");
let n=readlinesync.questionInt("enter value of  n:");
var size=[];


for(let i=0; i < n ;i++){
size[i]=readlinesync.questionInt("enter the size of array")
}

for(let i=0; i < n; i++){
    let str="";

    for(let j=0; j<size[i]; j++){
        str+=">"
    }
    console.log(str)
}

