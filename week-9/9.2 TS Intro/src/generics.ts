// type Input=number | string
// function firstEle(arr: Input[]){
//     return arr[0];
// }
// const val=console.log(firstEle(["nishu","raj"]));
// console.log(val);  //output: nishu
// console.log(val.toUpperCase());  // gives error, TS cannot understand that it is a string

function firstEle<T>(arr:T[]){
    return arr[0];
}

const val1=firstEle<string>(["nishu","me"]);
const val2=firstEle([1,2]);

console.log(val1.toUpperCase());