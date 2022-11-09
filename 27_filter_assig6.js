console.log("=========Q1.number greter than 50=============");
const array_numbers = [20,11,40,25,37,49,9,90,60,2,19];
const array_new = array_numbers.filter((Element)=>{
    return Element>50;
})
console.log(array_new);
console.log("=========Q2.Even number=============");
const evenNumber = array_numbers.filter((Element)=>{
    return Element%2==0;
})
console.log(evenNumber);
console.log("=========Q3.Odd number=============");
const oddNumber = array_numbers.filter((Element)=>{
    return Element%2!=0;
})
console.log(oddNumber);
console.log("=========Q4.multiple by 5 =============");
const multiple = array_numbers.filter((Element)=>{
    return Element%5==0;
})
console.log(multiple);
console.log("=========Q5.find out between 20 and 50 =============");
const between = array_numbers.filter((Element)=>{
    return Element>20 && Element<50;
})
console.log(between);