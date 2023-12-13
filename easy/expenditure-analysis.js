/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const temp=[];//an array of objects which stores the categroy i.e food/clothing as key and the total money spent as its value
  // temp[i][key]=value i.e  key =category and value=money spent total
  for(let i=0;i<transactions.length;i++){
    var key=transactions[i]["category"];
    var value=transactions[i]["price"];
    let categoryfound=false;
    for(let j=0;j<temp.length;j++){
      if(key in temp[j]){
        // update the money spent
        temp[j][key]+=value;
        categoryfound=true;
        break;
      }
    }
    if(!categoryfound){
      let obj={};
      obj[key]=value;
      temp.push(obj);
    }
  }
  
  const ans=temp.map((obj)=>({
    category:Object.keys(obj)[0],
    totalSpent:obj[Object.keys(obj)[0]],
  }));
  return ans;
}

module.exports = calculateTotalSpentByCategory;
