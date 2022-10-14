//WAP to find first 10 even numbers
var countEven = 0; 
for (let index = 0; index < 1000; index++) { 
    if(index%2==0){
        console.log(index);  
        countEven = countEven +1;
        if (countEven==10) {
            break;
        }
    }
    
}