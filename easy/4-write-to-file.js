// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs=require("fs");
let data="This is a new text";
fs.writeFile("a.txt",data,function (err){
    if(err)console.log(err);
    else{
        console.log("file has been rewrite succesfully");
        fs.readFile("a.txt","utf-8",function(err,value){
            console.log(value);
        });
    }
})