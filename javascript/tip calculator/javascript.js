// function calculate() {
//     var amount = $('#amount').val();
//     var percentage = $("#percentage").val();
//     var tip = amount *(percentage/100);
//     var total = Number(amount) + tip;   
    
//     $('#tip').val( tip.toFixed(2) );
//         $('#total').val( total.toFixed(2));

        
//         $('calculator').submit( calculate );
//     }



document.getElementById("addup").addEventListener('onclick',function(){
    var amount = parseFloat(document.getElementById("amount").value);
    var perc = parseFloat(document.getElementById("percentage").value);
    var total = amount * (perc/100);
    var tipAmount = total - amount;


    document.getElementById('tip').innerText = tipAmount;
    document.getElementById('total').innerText = total;
})

 




