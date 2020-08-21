function kind(a){
    return (a%2==0)?"even":"odd"
};



let a = Number(prompt("Enter a number:"));
console.log(`The number entered is ${a} and the 
number is ${kind(a)}`)
