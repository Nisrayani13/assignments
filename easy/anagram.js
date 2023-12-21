/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(s, str) {
  s=s.replace(/\s/g,"").toLowerCase();
  str=str.replace(/\s/g,"").toLowerCase();

  if(s.length!=str.length)return false;

  // sorting in string
  s=s.split("").sort().join("");
  str=str.split("").sort().join("");

  if(s!=str)return false;
  
  return true;
}

module.exports = isAnagram;
