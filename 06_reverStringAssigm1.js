function reverseString(string1){
//var string1 = "Hard work alaways pays back";
var lenthStr = string1.length-1;
var reverseString = "";
for (let index = lenthStr; index >=0; index--) {
    console.log(string1.charAt(index));
    reverseString= reverseString + string1.charAt(index);  
}
console.log(reverseString);
}
reverseString("Hard work alaways pays back");
reverseString("Soon I will be Angular IT champ");