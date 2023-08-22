// factorial

let fact = 1;

for (let i = 5; i >= 1; i--){
    fact = fact * i;
}
console.log(fact);


// recursion using factorial 
function facts(i){
    
    if(i === 1){
        return 1;
    }

    return i * facts(i - 1);
}
const factorial = facts(5);
console.log(factorial);