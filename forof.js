const numbers = [78, 58, 96, 78, 96, 78, 96, 120, 11];

//for of 
for(const number of numbers){
    console.log(number);
}

//for of using search
const phones = [
    {id:1, name:'xaomi phone', ram:'32gb', price:20000 },
    {id:2, name:'samsung phone', ram:'32gb', price:20000 },
    {id:3, name:'dell laptop', ram:'32gb', price:20000 },
    {id:4, name:'redmi phone', ram:'32gb', price:20000 },
    {id:5, name:'hp laptop', ram:'32gb', price:20000 },
    {id:6, name:'lenevo phone', ram:'32gb', price:20000 },
    {id:7, name:'xaomi phone', ram:'32gb', price:20000 },
    {id:8, name:'infinix phone', ram:'32gb', price:20000 }
]

function phoneSet(phones, search){
    let matched = [];
    for(const phone of phones){
        if(phone.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(phone);
        }
    }
    return matched;
}

const result = phoneSet(phones, 'phone');
console.log(result);