var square = function (value) {
    console.log(value * value);

}
console.log("Square of 5");
square(5);
console.log("Square of 6");
square(6);
console.log("Square of 25");
square(25);
console.log("Square of 100");
square(100);

console.log(typeof square);
console.log("=================================================");
var area= function(length,hight){
    console.log(0.5*length*hight);
}
console.log("Area of triangle");
area(45,34);
console.log("=================================================");

var area= function(length,width){
    console.log(length*width);
}
console.log("Area of Reactangle");
area(499,917);
console.log("=================================================");
var swap_value= function(arg1,arg2,temp){
    console.log("Before Swap");
    console.log(arg1,arg2);
    temp=arg1
    arg1=arg2
    arg2=temp
    console.log("After swapping");
    console.log(arg1,arg2);
}
swap_value("Virat","Anushka")
swap_value("1000","2000")
console.log("=================================================");

var greet="JavaScript the most popular language"
console.log(greet);
var char=greet.length
console.log("Total character available in the string is",char);
var index= greet.indexOf("S")
console.log("The index of character 'S' is",index);
var index_lang= greet.indexOf("lang")
console.log("The index of string 'lang'",index_lang);
var last=  greet.charAt(greet.length-1)
console.log("Last char of string is",last);
var third= greet.charAt(greet.length-3)
console.log("Third last char is",third);




