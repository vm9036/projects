
function mainPrime(){

    let num = parseInt(document.getElementById("inputNumber").value);
    console.log("num :->" +num);
    let optionSelect = document.getElementById("display").value;
    console.log("optionSelect :->" +optionSelect);
    
    if(optionSelect === "check")
    {
        let checkPrime  = isPrime(num);
        if(checkPrime){
            document.getElementById("prime").innerHTML = num +" is Prime : " + " Position (" +trackPosition(num) + ")";
        }else{
            document.getElementById("prime").innerHTML = num +" is Not Prime:";
        }
        console.log("checkPrime :-> "+checkPrime);
        
    }
    if(optionSelect === "next")
    {
        let nextPrime  = getMeNextPrime(num);
        if(nextPrime){
            document.getElementById("prime").innerHTML = nextPrime +" is Next Prime." + " Position (" +trackPosition(nextPrime) + ")";
        }
        console.log("nextPrime :-> "+nextPrime);
    }
    if(optionSelect === "previous")
    {
        let prePrime  = getMePrePrime(num);
        if(prePrime)
        {
            document.getElementById("prime").innerHTML = prePrime + " is Previous Prime." + " Position (" +trackPosition(prePrime) + ")";;
        }
        console.log("nextPrime :-> "+prePrime);
    }
}

function isPrime(n)
{   
    for(let i = 2; i < n; i++)
    {
        if(n % i == 0)
        {
            return false;
        }
    }
    return true;    
}

function getMeNextPrime(next){
    for(let i = next + 1; ; i++)
    {
        if(isPrime(i) == true)
        {
           return i;
        }
    }
}

function getMePrePrime(pre){
    for(let i = pre - 1; ; i--)
    {
        if(isPrime(i) == true)
        {
            return i;
        }
    }
}

function trackPosition(n)
{
    let  count = 0;
    for(let i = 2; i<=n; i++){
        if(isPrime(i) == true)
        {
            count++;
        }
    }
    return count;
}


