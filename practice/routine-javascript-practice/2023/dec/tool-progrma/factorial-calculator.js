function factorialCalculator(){
    let factNum = parseInt(document.getElementById("factNum").value);

    let fact = 1;

    if(factNum == "undefined")
    {
        alert("please enter proper value")
    }
    for(let i = 1; i<=factNum ; i++)
    {
        fact = fact * i;
    }
    console.log("fact " + factNum + ":-> "+fact);
    document.getElementById("displayFactNum").value = "Factorial of " + factNum + " : " + fact;
}