function grade(a){
    return (a>=70)?"A":(a>=50)?"B":"C"
}

let a = prompt("Enter your marks!!")
console.log(`Marks are ${a} and grade is `+grade(a))