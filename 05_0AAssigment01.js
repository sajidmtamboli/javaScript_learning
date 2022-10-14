var maleMarriageEligiblity = function (gender,age,boyName){
    
    var result = gender = "male" && age >= 21
        ? `Hey ${boyName} you are eligible for Marrrige`
        : `Not eligible for Marrige`;
    console.log(result);

}
maleMarriageEligiblity("male",25,"Billgates");
maleMarriageEligiblity("male",17,"stew jobs");
console.log("===================================");
var femaleMarriageEligiblity = function (gender,age,girlName){
    if( age >= 18){
        console.log(`Hey ${girlName} you are eligible for Marriage`);
    }
    else{
        console.log(`You are not eligible`);
    }

}
femaleMarriageEligiblity("female",16,"Jenifer");
femaleMarriageEligiblity("female",27,"Malinda Gates");
console.log("===================================");