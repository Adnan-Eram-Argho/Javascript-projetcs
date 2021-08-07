

function result2(){
    const feet = document.getElementById("feet");
    const feetValue = parseFloat(feet.value);
    const  kg = document.getElementById("kg")
    const kgValue =parseFloat(kg.value);
    const result = document.getElementById("result");


    var result1= (kgValue/ ((feetValue/3.281)*(feetValue/3.281))).toFixed('4');
    result.innerHTML = result1  ;
    
}

