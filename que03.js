const readlinesync=require("readline-sync");

let n=readlinesync.questionInt("enter the size of a array:");
let array=[]
for(i=0; i<n; i++){
    array[i]=readlinesync.questionInt("enter the element of array")

}
let x = readlinesync.questionInt("enter the position of array")
flag=0
for(i=0;i<n; i++){
    if(array[i]==x){
        flag=1 
    }
}
if(flag==1){
    console.log("yes");
}else{
    console.log("no");
}
