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
console.log("=======Q1.employee names============");
arrayEmployees.forEach((currentValue)=>{
    console.log(currentValue.emp_name);
})
console.log("=======Q2.list of department ============");
arrayEmployees.forEach((currentValue)=>{
    console.log(currentValue.emp_dept);
})
console.log("=======Q3.employee Id ============");
arrayEmployees.forEach((currentValue)=>{
    console.log(currentValue.emp_id);
})

