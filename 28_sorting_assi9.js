console.log("===========Q1.reverse the array==========");
const array_roll_numbers = [113,45,56,11,32,45,109,799,56,45];
array_roll_numbers.reverse();
console.log(array_roll_numbers);
console.log("===========Q2.sort the array==========");
array_roll_numbers.sort();
console.log(array_roll_numbers);
console.log("===========Q3.sort the array in asending order==========");
array_roll_numbers.sort((a,b)=>{
    return a > b ? 1 :-1;
})
console.log(array_roll_numbers);
console.log("===========Q4.sort the array in disending order==========");
array_roll_numbers.sort((a,b)=>{
    return a > b ? -1 :1;
})
console.log(array_roll_numbers);
console.log("===========Q5.reverse the array in disending order==========");
let array_roll_numbers1=array_roll_numbers.sort((a,b)=>{
    return a > b ? -1 :1;
})
//console.log(array_roll_numbers1);
array_roll_numbers1.reverse();
console.log(array_roll_numbers1);
console.log("===========Q6.grtest number from the array ==========");
array_roll_numbers.sort(()=>{
   const gretst = array_roll_numbers.length-1;
})
console.log(gretst);