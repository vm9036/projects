function tip_calculator() {

    let totalbillAmount = 0;

    let bill_amount = Number(document.getElementById("amount").value);
    let interestAmount = Number(document.getElementById("tipPercentage").value);

    let interest = (bill_amount * interestAmount) / 100;
    document.getElementById("tip_amount").value = interest;

    totalbillAmount = bill_amount + interest;
    document.getElementById("totalBill").value = totalbillAmount;


    
//     var tip_amount = document.getElementById('tipInput').value;
//     document.getElementById('tipOutput').innerHTML = `${tip}%`;
//     var tipValue = bill * (tip/100);
//     var finalBill = bill + tipValue;
// console.log(finalBill)
    
}