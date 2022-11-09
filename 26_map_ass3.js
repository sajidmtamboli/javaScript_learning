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

//const arrayEmployees = [emp_anil,emp_rada,emp_rashi,emp_sonali,emp_monika,emp_viny,emp_mahi];

const map =new Map();
map.set(22,emp_anil);
map.set(33,emp_radha)
map.set(55,emp_rashi); 
map.set(66,emp_sonali); 
map.set(77,emp_monika); 
map.set(88,emp_viny); 
map.set(33,emp_mahi);

map.forEach((value)=>{
    console.log(`Employee Id:${value.emp_id}==>Employee name: ${value.emp_name},Employee Department: ${value.emp_dept},Employee company: ${value.emp_salary}`);
})
