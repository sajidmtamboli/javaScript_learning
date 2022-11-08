console.log("==========Q.1 Log the array elemnt with index==============");
const array_number = [1,-7,40,502,-77,91,0,108,89,-601];
array_number.forEach((currentValue,index) =>{
console.log(currentValue,index);
})
console.log("===========Q2.positive number==============");
array_number.forEach((currentValue)=>{
if(currentValue>0)
console.log(currentValue);
})
console.log("===========Q3.negative number==============");
array_number.forEach((currentValue)=>{
    if(currentValue<0)
    console.log(currentValue);
})
console.log("===========Q4.even number==============");
array_number.forEach((currentValue)=>{
    if(currentValue%2==0)
    console.log(currentValue);
})
console.log("===========Q5.sum of all number==============");
count=0;
array_number.forEach((currentValue)=>{
    count = count + currentValue;
    
})
console.log(count);

console.log("===========Q6.even postioned number==============");
array_number.forEach((currentValue,index)=>{
    if(index%2==0)
    console.log(currentValue);
})
console.log("===========Q7.odd postioned  with negative number==============");
array_number.forEach((currentValue,index)=>{
    if(index%2!==0 && currentValue<0)
    console.log(currentValue);
})
