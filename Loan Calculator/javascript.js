function computeLoan(){
    var amount = document.getElementById('amount').value;
    var interest = document.getElementById('interest-rate').value;
    var month = document.getElementById('months').value;
    var interest = (amount *(interest*0.1))/month;
    var payment =((amount/month) + interest).toFixed(2);
    document.getElementById('payment').innerHTML = `monthly payment = ${payment}`;
}