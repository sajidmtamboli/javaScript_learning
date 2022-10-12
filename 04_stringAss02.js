var stringHandsOn= function(){
    var string=`    Hey you are doing good, keepit up    `
    console.log(`string is: ${string}`);
    console.log("============================");
    var length= string.length
    console.log(`Length of sring is : ${length}`);
    console.log("============================");
    var extraSpace = string.trim()
    console.log(`After removing extra space: ${extraSpace}`);
    console.log("============================");
    var countAftertrim = extraSpace.length
    var resultspacetrim = length-countAftertrim
    console.log(`total number extra spaces count removed in step 3 is: ${resultspacetrim}`);
    console.log("============================");
    var firstcharc = extraSpace.charAt(0)
    var last_character = extraSpace.charAt(32)
    console.log(`First & Last charcter after trim: ${firstcharc} & ${last_character}`);
    console.log("============================");
    var split = extraSpace.split(" ")
    console.log(` The count of total words availble in the string is:8 ${split}`);
    console.log("============================");
    var indexOfgood = string.indexOf("good")
    console.log(` The index of word "Good" from the given string is : ${indexOfgood}`);
    console.log("============================");
    var substr = extraSpace.substring(22)
    console.log(`subsring starting from index 22is : ${substr}`);
    console.log("============================");
    var slice = extraSpace.slice(22)
    console.log(`using slice star index of 22is: ${substr}`);
    console.log("============================");
    var check = extraSpace.endsWith("up")
    console.log(`Th word end is : ${check}`);
    console.log("============================");
    var checkout = extraSpace.startsWith("hey")
    console.log(`The word star is: ${checkout} `);

}
stringHandsOn()



