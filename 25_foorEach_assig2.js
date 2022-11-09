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
console.log("=====Q1.TCS employee & log name & company===========");
arrayEmployees.forEach((currentvalue)=>{
    if(currentvalue.emp_company=="TCS")
    console.log(`Employee Name: ${currentvalue.emp_name}, company Name:${currentvalue.emp_company}`);
})
console.log("=====Q2.sallary greter than 50000 & log deatils===========");
arrayEmployees.forEach((currentvalue)=>{
    if(currentvalue.emp_salary>=50000)
    console.log(currentvalue);
})
console.log("=====Q3.sum of all sallary ===========");
count=0;
arrayEmployees.forEach((currentValue)=>{
   count =  count + currentValue.emp_salary ;
    
})
console.log(count);
console.log("=====Q4.avg salary ===========");
arrayEmployees.forEach((currentValue)=>{
    averege  =  count / 7 ;
    
})
console.log(averege);
console.log("=====Q5.Find IT & HR department sallary greter than 75000 ===========");
arrayEmployees.forEach((currentvalue)=>{
    if(currentvalue.emp_dept="IT" && "HR" && currentvalue.emp_salary>=75000)
    console.log(currentvalue);
})