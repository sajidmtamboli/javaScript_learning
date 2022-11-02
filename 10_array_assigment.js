let arrayOfName = ["kamat","memon","nashpati","taimur","menon","kamat","andy","taimur"];
console.log("============given array is===========");
console.log(arrayOfName);
console.log("================removing duplicate name============");
let uniqueArray = new Set(arrayOfName);
console.log(uniqueArray);
console.log("================count removing duplicate name============");
let count = uniqueArray.size;

let result = arrayOfName.length-count;
console.log(result);
console.log("================total count after removing duplicate name============");
let totalCount = uniqueArray.size;
console.log(totalCount);

