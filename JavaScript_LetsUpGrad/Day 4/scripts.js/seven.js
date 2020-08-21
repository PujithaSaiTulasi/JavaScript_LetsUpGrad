let n1 = Number(window.prompt("Enter a number to generate prime numbers:"));
console.log(`The prime numbers between 2 and ${n1} are:`)
nextPrime:
for (let i = 2; i <= n1; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
  console.log(i);
}