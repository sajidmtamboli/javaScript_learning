var countVowels = function (myString) {
    console.log("1)Total number vowels using includes () for string-I am very good IT developer");
    //var myString = "I am very good IT developer";
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
countVowels("I am very good IT developer");
console.log("===========================");

    var square=1;
    var addition=0;
    for (let index = 0; index <=5; index++) {
        cube =index * index * index ; 
        addition= addition + cube;   
    }
    console.log("2)cube of sum of 1 to 5 is =");
    console.log(addition);

    console.log("===========================");

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
