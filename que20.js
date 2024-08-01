const readlineSync=require("readline-sync");
let row =readlineSync.questionInt("enter the value of row");
let column=readlineSync.questionInt("enter the value of column");
let extra=readlineSync.questionInt("enter the value of extra");



let total=(row*column);
let added=(row+extra);
let newupdate=(added*column);
console.log(newupdate);

