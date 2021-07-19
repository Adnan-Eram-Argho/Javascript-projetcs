function weightConverter(valNum){
    var valNum = valNum/2.205;
    var n = valNum.toFixed(10);
    document.getElementById("outpputPounds").innerHTML = n; 
   }