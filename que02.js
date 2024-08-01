const readlinesync = require("readline-sync");
let n = readlinesync.question("enter the size of array ")
arr=[]
for(i=0; i<n; i++){
    arr[i]= readlinesync.questionInt("enter the eleement of array ")
}
for(i=n-1; i>=0; i--){
    console.log(arr[i]);
}