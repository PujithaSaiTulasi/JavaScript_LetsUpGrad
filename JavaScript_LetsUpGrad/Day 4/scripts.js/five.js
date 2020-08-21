/*let n=Number(window.prompt("Enter the sales:"));
if(n>=0 && n<=5000)
console.log(` The commission is ${n*0.02}`);
else if(n>=5001 && n<=10000)
console.log(` The commission is ${n*0.05}`);
else if(n>=10001 && n<=20000)
console.log(` The commission is ${n*0.07}`);
else
console.log(` The commission is ${n*0.1}`); */


let n=Number(window.prompt("Enter the sales:"));
if(n>20000)
console.log(5000*0.02 + 5000*0.05 + 10000*0.07 + (n-20000)*0.1);
else if(n>=10001 && n<=20000)
console.log(5000*0.02 + 5000*0.05 + (n-10000)*0.07);
else if(n>=5001 && n<=10000)
console.log(5000*0.02 + (n-5000)*0.05 );
else
console.log((5000-n)*0.02 );