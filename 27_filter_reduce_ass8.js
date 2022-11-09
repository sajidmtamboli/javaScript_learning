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
console.log("=============Q1.Wipro comapny log=======");
const arrayEmployee = array_emps.filter((Element)=>{
    if(Element.emp_company=="Wipro")
console.log(Element);
})
console.log("=============Q2.IT & HR employee log=======");
const arrayEmployee1 = array_emps.filter((Element)=>{
    if(Element.emp_dept=="IT" || Element.emp_dept=="HR")
console.log(Element);
})
console.log("=============Q3.ID greter  than 50 employee log=======");
const arrayEmployee2 = array_emps.filter((Element)=>{
    if(Element.emp_id>50)
console.log(Element);
})
console.log("=============Q4.startwith A,V,M employee log=======");
const arrayEmployee3 = array_emps.filter((Element)=>{
    if(Element.emp_name.startsWith("A") || Element.emp_name.startsWith("V") ||Element.emp_name.startsWith("M"))
console.log(Element);    
})
console.log("=============Q5.averge sallary employee log=======");
count=0;
const arrayEmployee4 = array_emps.filter((Element)=>{
    return count =  count + Element.emp_salary;
})
console.log(count);

const avg = array_emps.reduce((runing,value)=>{
   return avereg = count/7;
})
console.log(avereg);
console.log("=============Q6.averge sallary of IT employee log=======");
const arrayEmployee5 = array_emps.filter((Element)=>{
    if(Element.emp_dept=="IT")
    console.log(Element);
})
count=0;
const arrayEmployee6 = arrayEmployee5.filter((Element)=>{
    return count =  count + arrayEmployee5.Element.emp_salary;
})
console.log(count);

