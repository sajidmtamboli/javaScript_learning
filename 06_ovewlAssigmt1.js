// Count the total number vowels using includes() for string → “Good Morning IT Champ”
var countVowels = function (myString) {
    console.log("1)Total number vowels using includes () for string-Good Morning IT Champ");
    var myString = "Good Morning IT Champ";
    var vowelsLoweCase = "aeiou";
    var vowelUpperCase = "AEIOU";
    var vowelsCount = 0;
    for (let index = 0; index < myString.length; index++) {
        var char = myString.charAt(index);
        var isLowerAvailable = vowelsLoweCase.includes(char);
        var isUpperAvailable = vowelUpperCase.includes(char);
        if (isLowerAvailable || isUpperAvailable) {
            vowelsCount = vowelsCount + 1;
        }
    }
    console.log(`Total Vowels count : ${vowelsCount}`);
}
countVowels("Good Morning IT Champ");
console.log("=======================================");

var countVowels = function (myString) {
    console.log("2)Total number vowels using includes () for string-I Love JavaScript");
    var myString = "I Love JavaScript";
    var vowelsLoweCase = "aeiou";
    var vowelUpperCase = "AEIOU";
    var vowelsCount = 0;
    for (let index = 0; index < myString.length; index++) {
        var char = myString.charAt(index);
        var isLowerAvailable = vowelsLoweCase.includes(char);
        var isUpperAvailable = vowelUpperCase.includes(char);
        if (isLowerAvailable || isUpperAvailable) {
            vowelsCount = vowelsCount + 1;
        }
    }
    console.log(`Total Vowels count : ${vowelsCount}`);
}
countVowels("I Love JavaScript");
console.log("=======================================");


var addition = 0;
for (let index = 0; index <= 10; index++) {
    addition=addition+index; 
    
}
console.log("3)Total sum 1 to 10 is=");
console.log(addition); 
console.log("=======================================");

var num = function(){
    var square=1;
    var addition=0;
    for (let index = 0; index <=5; index++) {
        square=index * index; 
        addition= addition + square;   
    }
    
}
console.log("4)sum of square 1 to 5 is=");
console.log(addition);
console.log("=======================================");

 function evenPostionedChars(string1){
    for (let index = 0; index < string1.length; index++) {
        // console.log(index%2==0);
        var chh = string1.charAt(index);
        if (index%2==0 && chh!=" ") {
           console.log(chh);
        }  
     }
}
evenPostionedChars("Hard work always pays back");
evenPostionedChars("Soon I will be Angular IT");

console.log("=======================================");

function oddPostionedChars(string1){
    for (let index = 0; index < string1.length; index++) {
        // console.log(index%2==0);
        var chh = string1.charAt(index);
        if (index%2!==0 && chh!=" ") {
           console.log(chh);
        }  
     }
}
oddPostionedChars("Hard work always pays back");
oddPostionedChars("Soon I will be Angular IT");




