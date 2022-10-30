const bank_sbi = {
bank_name : "State bank of india",
manger_name :"Rjan Patil",
contact_no : 8605180998,
bank_time : "10AM to 5PM",
}
console.log(bank_sbi);
const bank_loction ={
    street : "sangola road",
    city : "sangola",
    pin_code : "413314",
}
console.log(bank_loction);

let clone = Object.assign ({},bank_sbi,bank_loction );
console.table(clone);

const rate_of_intrest= {
    home_lone_intrest : "11%" ,
    personal_lone_intrest : "10.5%",
    due_intrest : "12.5%",
}
console.log(rate_of_intrest);

let merge = Object.assign ({},bank_sbi,bank_loction,rate_of_intrest );
console.table(merge);

for (const key in merge) {
    if (Object.hasOwnProperty.call(merge, key)) {
        const element = merge[key];
        console.log(`${key} ${element}`);
    }
}

    
