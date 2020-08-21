let num;
num= prompt("Enter number greater than 100");
do{
  (num>100)? console.log( `you entered ${num} wich is greater than 100`) : num= prompt("Enter the number again!!");
}while(num<=100);
