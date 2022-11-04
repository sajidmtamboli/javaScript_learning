console.log("===============Q1.log msg in arrow function================");
let msg = () => {
    console.log("Good Evening,Today is Friday");
}
msg()
console.log("==========Q2.a================");

let mult = (n1, n2, n3) => {

 let multiplication = n1 * n2 * n3; 
 console.log(multiplication);
}
mult(5,5,2)
console.log("==========Q2.b================");

let multe = (n1, n2, n3=2) => {

 let multiplication = n1 * n2 * n3; 
 console.log(multiplication);
}
multe(10,4)

console.log("==========Q3.a================");
let add = (a1,a2, a3, a4,a5) =>{
return  a1+a2+a3+a4+a5;

}
console.log(add(100,100,200,349,756)); 
console.log(add("I AM","Learning","ES6","Feature","in depth")); 
  

