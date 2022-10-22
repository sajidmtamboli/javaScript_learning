class vehicle {
    constructor(vehicleName, vehicleColor, vehicleEngine, vehiclePrice) {
        this.vehicleName = vehicleName;
        this.vehicleColor = vehicleColor;
        this.vehicleEngine = vehicleEngine;
        this.VehiclePrice = vehiclePrice;
    }

}
console.log("=============Q1 Vehicle details================");
let maruti = new vehicle("Maruti800", "white", "800cc", "1.5lack");
console.log(maruti);
console.log("=====================================");
let honda = new vehicle("honda", "black", "600cc", "3lack");
console.log(honda);
console.log("=====================================");
let unicorn = new vehicle("unicorn", "gray", "150cc", "1.6lack");
console.log(unicorn);
console.log("=====================================");
let kia = new vehicle("kia", "red", "900cc", "16lack");
console.log(kia);
console.log("=====================================");
let ertiga = new vehicle("ertiga", "white", "750cc", "13lack");
console.log(ertiga);
console.log("=================Q2 College details====================");

class college {
    constructor(collegeName, collegeLocation, collegeStream, collegeFee) {
        this.collegeName = collegeName;
        this.collegeLocation = collegeLocation;
        this.collegeStream = collegeStream;
        this.collegeFee = collegeFee;
    }


}

let collegeDeails = new college("FTC", "sangola", "Engineering", "1lack");
console.log(collegeDeails);
console.log("========================");
let collDeails = new college("SPA", "Atpadi", "Engineering", "50k");
console.log(collDeails);
console.log("========================");
let collDeail = new college("AIT", "Vita", "Pharmacy", "90k");
console.log(collDeail);
console.log("========================");
let colleDeail = new college("COEP", "Pune", "Engineering & Pharmacy", "1lack");
console.log(colleDeail);
console.log("==============Q3 Traverse object========");

for (const key in collegeDeails) {
    if (Object.hasOwnProperty.call(collegeDeails, key)) {
        const element = collegeDeails[key];
        console.log(`${key}  ${element}`);

    }
}
console.log("===================");
for (const key in collDeails) {
    if (Object.hasOwnProperty.call(collDeails, key)) {
        const element = collDeails[key];
        console.log(`${key}  ${element}`);

    }
}
console.log("===================");
for (const key in collDeail) {
    if (Object.hasOwnProperty.call(collDeail, key)) {
        const element = collDeail[key];
        console.log(`${key}  ${element}`);

    }
}
console.log("===================");
for (const key in colleDeail) {
    if (Object.hasOwnProperty.call(colleDeail, key)) {
        const element = colleDeail[key];
        console.log(`${key}  ${element}`);

    }
}
console.log("==========Q4 Instance Of=========");

console.log(collegeDeails instanceof college);
console.log(collDeails instanceof college);
console.log(collDeail instanceof college);
console.log(colleDeail instanceof college);




