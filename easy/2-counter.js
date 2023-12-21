// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function f(time){
    if(time<=5){
        setTimeout(function(){
            console.log(time);
            f(time+1);
        },1000);
        
    }
}
let start=new Date();
f(1);
console.log(`Time taken to execute the f(1) function ${new Date()-start}`);




































































// (Hint: setTimeout)