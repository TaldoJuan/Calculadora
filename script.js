    const calc = document.getElementById("calc");

    function openCalc() {
    calc.style.display = "block";
}


function closeCalc () {
    
    calc.style.display = "none";
}

function calculate() {
    const fNumber = document.getElementById("fNumber")
    const lNumber = document.getElementById("lNumber")
    const operation = document.getElementById("oper")
    console.log(fNumber.value);
    console.log(lNumber.value);
    console.log(operation.value);
    const resultNumber = document.getElementById("resultNumber")
    
    let calculo = 0;
    
    switch (operation.value) {
        case "sum":
            calculo = parseInt(fNumber.value) + parseInt(lNumber.value) 
            break;
        
            case "sub":
                calculo = parseInt(fNumber.value) - parseInt(lNumber.value)
            break;    

            case "mult" :
            calculo = parseInt(fNumber.value) * parseInt(lNumber.value)  
            break;

            case "div":
            calculo = parseInt(fNumber.value) / parseInt(lNumber.value)
            break;


        default:
            break;
     }
     resultNumber.innerHTML = calculo;  
    }

    function resetCalculator() {
        document.getElementById("fNumber").value
        document.getElementById("lNumber").value
        document.getElementById("oper").value = "sum";
            const resultNumber = document.getElementById("resultNumber").innerHTML = 0
    }

    
 
   
 
 
