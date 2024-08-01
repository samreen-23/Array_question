const readlineSync=require("readline-sync");
let n=readlineSync.questionInt("enter the n")
let arr=[];
let i=0;
while(i<n){
     arr[i]=readlineSync.questionInt("enter the element:")
     i++;
}
let j = 0;
while(j<n){
    if(arr[j]%2 != 0){
        console.log(arr[j]);
    }
    j++;
}

