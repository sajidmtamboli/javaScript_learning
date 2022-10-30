const array_number =[20,31,40,25,23,11,29,9,60,2,11];
console.log(array_number);
const array_length = array_number.length;
console.log(`Length of given array is: ${array_length}`);
console.log("========Q2 log first & last element=========");
array_number[0];
console.log(`First Number=${array_number[0]}`);
array_number[10];
console.log(`Last Number=${array_number[10]}`);
console.log("========Q3 log 3rd last element=========");
array_number[8];
console.log(`last 3rd element: ${array_number[8]}`);
console.log("========Q4 even number=========");

for (let index = 0; index <= array_number.length ; index++) {
    const element = array_number[index];
    if (element %2 ==0){
    console.log(element);
}
}
console.log("========Q5 odd number=========");
for (let index = 0; index < array_number.length ; index++) {
    const element = array_number[index];
if (element%2 !=0){
    console.log(element);
}
}
console.log("========Q6 All odd postion number=========");
for (let index = 0; index <= array_number.length ; index++) {
    const element = array_number[index];
    if (index %2 ==0){
    console.log(element);
}
}
console.log("========Q7 all even postion number=========");
for (let index = 0; index < array_number.length ; index++) {
    const element = array_number[index];
if (index%2 !=0){
    console.log(element);
}
}
console.log("========Q 8 sum of array=========");
let sum=0;
for (let i= 0; i< array_number.length; i++) {
 sum= sum + array_number[i];
}
console.log(sum);
console.log("========Q 9 which are multiply by 5=========");
for (let index = 1; index < array_number.length; index++) {
    const element = sum + index;
    console.log(`The sum is ${element}`);
  }
  console.log("========Q 10 is number availble=========");
  console.log(array_number.includes(115));
  console.log("========Q 11 is number availble=========");
  console.log(array_number.includes(23));