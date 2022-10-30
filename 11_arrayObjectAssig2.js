class Bank {
    constructor(bank_name, location, account_no, ifsc, intrest_rate){
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc = ifsc;
        this.intrest_rate = intrest_rate;
    }
}
let bank1 = new Bank("axis bank", "sangola", "123456", "AXI0012", "10%");
console.log(bank1);
let bank2 = new Bank("state bank of india", "sangli", "321654", "SBI0012", "12%");
console.log(bank2);
let bank3 = new Bank("ICIC bank", "kolapur", "987654", "ICIC0012", "13%");
console.log(bank3);
let bank4 = new Bank("mahindra kotak bank", "satara", "654123", "MKB0012", "09%");
console.log(bank4);
let bank5 = new Bank("HDFC bank", "pune", "963852", "HDFC0012", "08%");
console.log(bank5);
let bank6 = new Bank("panjab national bank", "mumbai", "741852", "PNB0012", "15%");
console.log(bank6);
console.log("====================================");
let allBank = [ bank1, bank2, bank3, bank4, bank5, bank6];

for (let index = 0; index < allBank.length; index++) {
    const element = allBank[index];
    console.log(` Bank Name:${element.bank_name},Bank Loction:${element.location}`);
}
console.log("====================================");
for (const iterator of allBank) {
    if(iterator== bank4 ){
        console.log(iterator);
    }
}
console.log("====================================");
for (const iterator of allBank) {
    console.log(iterator);
}
