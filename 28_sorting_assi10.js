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
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rashi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(33, "Mahesh", "HR", 85000, "Infy");

const array_emps = [emp_anil,emp_radha,emp_rashi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log("===========Q1.sort the array in asending order==========");
array_emps.emp_id.sort((a,b)=>{
    return a > b ? 1 :-1;
})
console.log(array_emps);

console.log("=============Q1.Wipro comapny log=======");
const arrayEmployee = array_emps.sort((a,b)=>{
    return a > b ? 1 :-1;
})
console.log(a,b);