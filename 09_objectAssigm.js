let teacher = {
    firstName: "Sajid",
    lastName: "Tamboli",
    age: "28",
    city: "sangola",
    Profession: "Lecturer",
    degree: {
        Engineering: "CSC",
        phd: "Adv Computig",
        certificate: {
            certificates1: " Hacker Rank parrticipation",
            certificates2: " certificates in IFE course",
            certificates3: "certificates in adv  programming",
        },

    },
    concat: function () {

        let allDegree = this.degree.Engineering + " " + this.degree.phd
        console.log(allDegree);

    }

}
console.table(teacher);
console.log("Nested degree");
console.table(teacher.degree);
console.log("Nested degree");
console.table(teacher.degree.certificate);
console.log("===After concat=====");
teacher.concat()
console.log("=====modified property=====");
teacher.fullName = "fullName=Sajid Tamboli"
console.log(teacher.fullName);
console.log("=====New property=====");
teacher.pin = "pin code=413314";
console.log(teacher.pin);
console.log("=====delet certificate=====");
delete teacher.degree.certificate.certificates1;
console.table(teacher.degree.certificate);
teacher.degree.certificate.certificates4 = " Certificate in C++";
console.table(teacher.degree.certificate);



