/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let s=str.replace(/[^a-zA-Z0-9 ]/g,'');
  s=s.toLowerCase();
  s=s.split(" ").join("");
  let n=s.length;
  let rev="";
  for(let i=s.length-1;i>=0;i--){
    rev=rev+s[i];
  }
  if(s!==rev)return false
  return true;
}

module.exports = isPalindrome;
