/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  // setup
  constructor(){
    this.result=0;
  }
  add(a){
    this.result+=a;
  }
  subtract(a){
    this.result-=a;
  }
  multiply(a){
    this.result*=a;
  }
  divide(a){
    if(a===0)throw new Error;
    this.result/=a;
  }
  clear(){
    this.result=0;
  }
  getResult(){
    return this.result;
  }
  find_operation_and_eval(str){
    if(str.match(/\(?[0-9]\+[0-9]\)?/g)!=null){
      let arr=str.replace(/[^0-9]/g,"").split("");
      this.result=Number(arr[0]);
      this.add(Number(arr[1]));
    }
    else if(str.match(/\(?\d\-\d\)?/g)!=null){
      let arr=str.replace(/[^0-9]/g,"").split("");
      this.result=Number(arr[0]);
      this.subtract(Number(arr[1]));
    }
    else if(str.match(/\(?\d\*\d\)?/g)!=null){
      let arr=str.replace(/[^0-9]/g,"").split("");
      this.result=Number(arr[0]);
      this.multiply(Number(arr[1]));
    }
    else if(str.match(/\(?\d\/\d\)?/g)!=null){
      let arr=str.replace(/[^0-9]/g,"").split("");
      this.result=Number(arr[0]);
      this.divide(Number(arr[1]));
    }
  }
  calculate(str){
    this.result=eval(str);
    if(eval(str)===Infinity || eval(str)===-Infinity)throw new Error;
    // evaluating the string
    // removing spaces
    // let str=s;
    // s=s.split(" ").join("");
    // if there are any aplhabets then throw error
    // if(/[^0-9+\-*/]/g.test(s))throw new Error;

    // evaluating a valid string
    // 10 +   2 *    (   6 - (4 + 1) / 2) + 7
    
  }
}

module.exports = Calculator;
