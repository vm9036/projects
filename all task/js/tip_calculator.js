function tip_calculator() {

    var bill_amount = Number(document.getElementById('amount').value);
    
    var tip_amount = document.getElementById('tipInput').value;
    document.getElementById('tipOutput').innerHTML = `${tip}%`;
    var tipValue = bill * (tip/100);
    var finalBill = bill + tipValue;
console.log(finalBill)
    
}