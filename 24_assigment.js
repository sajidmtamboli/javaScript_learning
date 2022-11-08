class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_rada = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rashi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(33, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [emp_anil,emp_rada,emp_rashi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log("========1.print TCS emp.name & company============");
for (const details of arrayEmployees) {
    if(details.emp_company==="TCS")
    console.log(`Employee Name: ${details.emp_name}, Employee company: ${details.emp_company}`);
}
console.log("========2.print Finace emp.name & department============");
for (const iterator of arrayEmployees) {
    if(iterator.emp_dept==="Finance")
    console.log(`Department: ${iterator.emp_dept}, Employee Name: ${iterator.emp_name} `);
}
console.log("========3.start with R complete log details============");
for (const iterator of arrayEmployees) {
    if(iterator.emp_name.startsWith("R"))
    console.log(iterator);
}
console.log("========4.sallary grtere than 70000 log details============");
for (const iterator of arrayEmployees) {
    if(iterator.emp_salary>70000)
    console.log(`Employee Name: ${iterator.emp_name}, Employee company: ${iterator.emp_company},Employee sallary: ${iterator.emp_salary}`);
}
console.log("========5.sallay grtere equl 50000 && depart IT log details============");
for (const iterator of arrayEmployees) {
    if(iterator.emp_salary>=50000 && iterator.emp_dept =="IT")
    console.log(iterator);
}
console.log("========6.comapnye Infy log details============");
for (const iterator of arrayEmployees) {
    if(iterator.emp_company==="Infy")
    console.log(iterator);
}