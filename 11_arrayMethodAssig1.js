let array_string = ["Banana", "Orange", "Apple", "Mango", "WaterMelon"];
console.log(array_string);
console.log("===========Q1.lof first & last element==========");
array_string[0];
console.log(`First element: ${array_string[0]}`);
array_string[4];
console.log(`Last element: ${array_string[4]}`);
console.log("===========Q2.Add papaya element before banana==========");
array_string.unshift("Papaya");
console.log(array_string);
console.log("===========Q3.Remove mango  from array==========");
let spliceElent = array_string.splice(4,1);
console.log(spliceElent);
console.log(array_string);
console.log("===========Q4.Add pineapple  at last postion==========");
array_string.push("Pineapple")
console.log(array_string);
console.log("===========Q5.Insert dragon fruit  before water melon==========");
let spliceelem = array_string.splice(4,0,"Drgoan Fruit");
console.log(array_string);
console.log("===========Q6.replace orange  with kiwi=========");
let spliceele = array_string.splice(2,1,"Kiwi");
console.log(array_string);
console.log("===========Q7.log index 1 to 4 =========");
let sliceelement = array_string.slice(1,4);
console.log(sliceelement);
console.log("===========Q8.last 3 element =========");
let slice = array_string.slice(4);
console.log(slice);
