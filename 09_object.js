let varibleName="";
let person = {
    "fullName" : "Sachin Tendulkar",
    "city" : "Mumbai",
    age : 42,
    isMarried : "true",
    addres: {
         street :"ABCD" ,
         Pin : 123456,
         City : "Pune",
         State : "MH",
    },
    eat :function(){
        console.log("I Am veg");
    },

}
console.log(typeof person);
console.log(person.addres);
person.addres.landmark = " near main road";
person.fullName = " sachin ramesh tendulkar";
person.pin = 123456;
delete person.age;
person.eat();


console.log(person.city);
console.log(person.age);
let personFullname= person.fullNmae;
console.log(personFullname);
console.log(person.fullname);