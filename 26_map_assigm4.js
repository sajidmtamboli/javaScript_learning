const array_numbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log("======Q1.add 10 in each value======");
const add_array_numbers = array_numbers.map ((element)=>{
    return element+10;
})
console.log(add_array_numbers);
console.log("==========Q2.squre each element=======");
const squre_array_numbers = array_numbers.map ((element)=>{
    return element*element;
})
console.log(squre_array_numbers);
console.log("==========Q3.index each element=======");
const adding_array_numbers = array_numbers.map ((element,index)=>{
   console.log(element,index); 
})
