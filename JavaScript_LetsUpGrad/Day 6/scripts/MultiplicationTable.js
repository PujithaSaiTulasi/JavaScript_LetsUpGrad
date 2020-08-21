function printTable(){
    var n;
    n=Number(document.getElementById('txtNumber').value);
    for(let i=1;i<=20;i++)
    {
        document.write(`${n} X  ${i} =  ${n*i}`);
        document.write("<br/>");
    }
}    