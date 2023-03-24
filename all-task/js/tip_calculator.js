function tipCalculator() {

    let totalbillAmount = 0;
    let billAmount = Number(document.getElementById("billAmount").value);
    let interestAmount = Number(document.getElementById("tipPercentage").value);
    let gstAmountValue = Number(document.getElementById("gstAmount").value);

    let interest = (billAmount * interestAmount) / 100;
    document.getElementById("amount").value = interest;

    let gst = (billAmount * gstAmountValue) / 100;
    document.getElementById("finalGst").value = gst;

    totalbillAmount = interest + gst + billAmount;
    document.getElementById("totalBillAmount").value = totalbillAmount;

//     var tip_amount = document.getElementById('tipInput').value;
//     document.getElementById('tipOutput').innerHTML = `${tip}%`;
//     var tipValue = bill * (tip/100);
//     var finalBill = bill + tipValue;
// console.log(finalBill)
    
}

tipCalculator();