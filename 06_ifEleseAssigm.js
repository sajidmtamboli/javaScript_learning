var gradeSystem = function (score) {
    if (score<35 && score>=0 && score!=" " && score!= null && score!="") {
        console.log(`Result = You are failed.`);
    }
    if (score>=35 && score<=100) {
        console.log(`Result = You are passed.`);
    }
    if (score>35 && score<60) {
        console.log(`and GRADE is 'C'.`);
    }
    if (score>60 && score<75) {
        console.log(`and GRADE is 'B'.`);
    }
    if (score>=75 && score<90) {
        console.log(`and GRADE is 'A'.`);
    }
    if (score>90 && score<100) {
        console.log(`and GRADE is 'A+'.`);
    }
    if (score<0 || score>100) {
        console.log(`Invalid score`);
    }
    if (typeof(score) == "string") {
        console.log(`Invalid Input`);
    }
    if (score== null || score == undefined) {
        console.log(`Invalid Input`);
    }
}
console.log("1============");
gradeSystem(66)
console.log("2============");
gradeSystem(13)
console.log("3============");
gradeSystem(" ")
console.log("4============");
gradeSystem(98)
console.log("5============");
gradeSystem("Fifty five")
console.log("6============");
gradeSystem(35)
console.log("7============");
gradeSystem(75)
console.log("8============");
gradeSystem(null)
console.log("9============");
gradeSystem(undefined)
console.log("10============");
gradeSystem(-20)
console.log("11============");
gradeSystem(55)
console.log("12============");
gradeSystem(82)
