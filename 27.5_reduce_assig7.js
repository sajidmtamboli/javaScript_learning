console.log("===========Q1.sum of all=============");
const array_numbers = [20,11,40,25,37,49,9,90,60,2,19];
const sum = array_numbers.reduce((running,value)=>{
    return running+value;
})
console.log(sum);
console.log("===========Q2.all even numbers sum=============");
//const array_numbers1 = [20,11,40,25,37,49,9,90,60,2,19];
const evenNumber = array_numbers.filter((Element)=>{
    return Element%2==0;
})
console.log(evenNumber);
const evenNumberSum = evenNumber.reduce((running,value)=>{
    return running+value;
})
console.log(evenNumberSum);