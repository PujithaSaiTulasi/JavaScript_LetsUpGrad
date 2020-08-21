var firstnumber;  
var secondnumber;  
var result;  
var operations;  
  
function numone() {  
    if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result) {  
  
        document.lcdform.lcds.value = "1";  
  
    } else //if(document.lcdform.lcds.value != "0")    
    {  
        documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + "1";  
    }  
  
}  
  
function numtwo() {  
  
            if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result) {  
  
                document.lcdform.lcds.value = "2";  
  
            } else //if(document.lcdform.lcds.value != "0")    
            {  
                documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + "2";  
            }  
}  
  
function numthree() {  
  
            if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result) {  
  
                document.lcdform.lcds.value = "3";  
  
            } else //if(document.lcdform.lcds.value != "0")    
            {  
                documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + "3";  
            }  
  
}  
  
function numfour() {  
  
            if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result) {  
  
                document.lcdform.lcds.value = "4";  
  
            } else //if(document.lcdform.lcds.value != "0")    
            {  
                documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + "4";  
            }  
  
}  
  
function numfive() {  
  
            if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result) {  
  
                document.lcdform.lcds.value = "5";  
  
            } else //if(document.lcdform.lcds.value != "0")    
            {  
                documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + "5";  
            }  
  
}  
  
function numsix() {  
  
            if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result) {  
  
                document.lcdform.lcds.value = "6";  
  
            } else //if(document.lcdform.lcds.value != "0")    
            {  
                documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + "6";  
            }  
  
}  
  
function numseven() {  
  
            if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result) {  
  
                document.lcdform.lcds.value = "7";  
  
            } else //if(document.lcdform.lcds.value != "0")    
            {  
                documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + "7";  
            }  
}  
  
function numeight() {  
  
            if (document.lcdform.lcds.value == "0") {  
  
                document.lcdform.lcds.value = "8";  
  
            } else if (document.lcdform.lcds.value == result) {  
                document.lcdform.lcds.value = "8";  
            } else //if(document.lcdform.lcds.value != "0")    
            {  
                documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + "8";  
            }  
  
}  
  
function numnine() {  
  
            if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result) {  
  
                document.lcdform.lcds.value = "9";  
  
            } else //if(document.lcdform.lcds.value != "0")    
            {  
                documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + "9";  
            }  
  
}  
  
function numzero() {  
  
            if (document.lcdform.lcds.value == "0") {  
  
                document.lcdform.lcds.value = "0";  
  
            } else if (document.lcdform.lcds.value == result) {  
                document.lcdform.lcds.value = "0";  
            } else //if(document.lcdform.lcds.value != "0")    
            {  
                documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + "0";  
            }  
  
}  
  
function numdobuzero() {  
  
            if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result) {  
  
                return;  
  
            } else //if(document.lcdform.lcds.value != "0")    
            {  
                documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + "00";  
            }  
  
}  
  
function clr() {  
            document.lcdform.lcds.value = "0";  
            document.lcdform.lcdsu.value = "";  
            return;  
}  

function operationplus() {  
  
            operation = "+";  
            firstnumber = parseInt(document.lcdform.lcds.value);  
            document.lcdform.lcds.value = "0";  
            document.lcdform.lcdsu.value = firstnumber + operation;  
            //alert(firstnumber);    
  
}  
  
function operationmult() {  
  
            operation = "*";  
            firstnumber = parseInt(document.lcdform.lcds.value);  
            document.lcdform.lcds.value = "0";  
            document.lcdform.lcdsu.value = firstnumber + operation;  
  
}  
  
function operationminus() {  
  
            operation = "-";  
            firstnumber = parseInt(document.lcdform.lcds.value);  
            document.lcdform.lcds.value = "0";  
            document.lcdform.lcdsu.value = firstnumber + operation;  
  
}  
  
function operationdivid() {  
  
            operation = "/";  
            firstnumber = parseInt(document.lcdform.lcds.value);  
            document.lcdform.lcds.value = "0";  
            document.lcdform.lcdsu.value = firstnumber + operation;  
  
}  
  
function operationperc() {  
  
            operation = "%";  
            firstnumber = parseInt(document.lcdform.lcds.value);  
            document.lcdform.lcds.value = "0";  
            document.lcdform.lcdsu.value = firstnumber + operation;  
  
}  
  
function equalsto() {  
  
            secondnumber = parseInt(document.lcdform.lcds.value);  
  
            if (operation == "+") {  
                result = firstnumber + secondnumber;  
            } else if (operation == "*") {  
  
                result = firstnumber * secondnumber;  
  
            } else if (operation == "-") {  
  
                result = firstnumber - secondnumber;  
  
            } else if (operation == "/") {  
  
                result = firstnumber / secondnumber;  
  
            } else if (operation == "%") {  
  
                if (document.lcdform.lcds.value == "0") {  
  
                    result = firstnumber / 100;  
                    document.lcdform.lcdsu.value = firstnumber + operation + "100";  
                } else if (document.lcdform.lcds.value != "0") {  
                    result = firstnumber / secondnumber * 100;  
                    document.lcdform.lcdsu.value = firstnumber + operation + secondnumber + "*100 = " + result;  
                }  
            } else if (operation == "^") {  
  
                for (var i = 0; i < secondnumber; i++) {  
  
                    result = firstnumber * i;  
                }  
  
  
            }  
            document.lcdform.lcds.value = "";  
            document.lcdform.lcds.value = result.toString();  
            document.lcdform.lcdsu.value = firstnumber + operation + secondnumber + " = " + result.toString();  
            return;  
  
}  
  
function sqrots() {  
            firstnumber = document.lcdform.lcds.value;  
            result = Math.sqrt(parseInt(document.lcdform.lcds.value));  
            document.lcdform.lcds.value = result;  
            document.lcdform.lcdsu.value = "sqrt(" + firstnumber + ") = " + result;  
  
}  
  
function operationraistop() {  
  
            operation = "^";  
            firstnumber = parseInt(document.lcdform.lcds.value);  
            document.lcdform.lcds.value = "0";  
  
}  
         