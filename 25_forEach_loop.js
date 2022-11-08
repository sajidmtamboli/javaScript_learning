const arrayNumber = [10,20,30,40,20,10];
//arrayNumber.forEach(function(currentvalue, index,array){
  //  console.log(currentvalue, index,array);
//})

arrayNumber.forEach((currentvalue)=>{
    console.log(currentvalue);
});

arrayNumber.forEach((currentvalue,index) =>{
if(currentvalue<0){
    console.log(currentvalue);
}
});

console.log("====travesing set using forEcah====");
const setOfnumbers = new Set(arrayNumber);
setOfnumbers.forEach ((value)=>{
console.log(value);
});

console.log("===== Traversing map using forEach() =====");
let map = new Map();
map.set(22, "Sachin");
map.set(11, "Dravid");
map.set(33, "Gaungully");
map.set(77, "Dravid");
map.forEach( (key, value) => {
    console.log(key, value);
} );
