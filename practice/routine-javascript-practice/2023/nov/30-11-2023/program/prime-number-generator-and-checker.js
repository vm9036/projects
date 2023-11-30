
function mainPrime(){

    let num = document.getElementById("inputNumber").value;
    console.log("num :->" +num);
    let optionSelect = document.getElementById("display").value;
    console.log("optionSelect :->" +optionSelect)
    
    if(optionSelect === "check")
    {
        let checkPrime  = isPrime(num);
        console.log("checkPrime :-> "+checkPrime)
        document.getElementById("prime").innerHTML = checkPrime;
    }
    if(optionSelect === "next")
    {
        let nextPrime  = getMeNextPrime(num);
        console.log("nextPrime :-> "+nextPrime)
        document.getElementById("prime").innerHTML = nextPrime;
    }

}

function isPrime(n)
{   
    let i;
    for(i = 2; i < n; i++)
    {
        if(n % i == 0)
        {
            return  n + " is Not Prime";
        }
    }
    return n + " is Prime";
}

function getMeNextPrime(next){
    let i;
    for(i = next + 1; ; i++)
    {
        console.log("i :->"+i);
        if(isPrime(i))
        {
            console.log(i);
            // break;
           return i + " is Next Prime";
        }
    }
}
console.log(getMeNextPrime(5))


function getMePrePrime(pre){

    for(let i = pre - 1; ; i--)
    {
        if(isPrime(i) == true)
        {
            // console.log(i);
            return i;
        }
    }
}


