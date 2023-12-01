
function primeNumberGenerator(){

    let num = parseInt(document.getElementById("inputNumber").value);
    
    let optionSelect = document.getElementById("display").value;
    
    
    if(optionSelect === "check")
    {
        let checkPrime  = isPrime(num);
        if(checkPrime){
            let position = trackPosition(num);
            let endString = getPrimeAtPositionString(position);
            let finalString = num + " is Prime." + " Position (" + position + endString +")";
            document.getElementById("prime").innerHTML = finalString;
        }
        else
        {
            document.getElementById("prime").innerHTML = num +" is Not Prime:";
        }  
    }

    if(optionSelect === "next")
    {
        let nextPrime  = getMeNextPrime(num);
        if(nextPrime){
            let position = trackPosition(nextPrime);
            let endString = getPrimeAtPositionString(position);
            let finalString = nextPrime + " is Next Prime." + " Position (" + position + endString +")";
            document.getElementById("prime").innerHTML = finalString;
        }
    }

    if(optionSelect === "previous")
    {
        let prePrime  = getMePrePrime(num);
        if(prePrime)
        {
            let position = trackPosition(prePrime);
            let endString = getPrimeAtPositionString(position);
            let finalString = prePrime + " is Previous Prime." + " Position (" + position + endString +")";
            document.getElementById("prime").innerHTML = finalString;
        }
    }
}

//pass a number to check if it's prime or not, it will return true if it's prime and false it if it's not
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

// pass a number and than check prime or not and it will return next prime number
function getMeNextPrime(nextPrime){
    for(let i = nextPrime + 1; ; i++)
    {
        if(isPrime(i) == true)
        {
           return i;
        }
    }
}

// pass a number and than check prime and it will return previous prime number
function getMePrePrime(previousPrime){
    for(let i = previousPrime - 1; ; i--)
    {
        if(isPrime(i) == true)
        {
            return i;
        }
    }
}

// pass a prime number and than it will check prime and than count will increase and it will return position number
function trackPosition(primeNum)
{
    let  count = 0;
    for(let i = 2; i<=primeNum; i++){
        if(isPrime(i) == true)
        {
            count++;
        }
    }
    return count;
}

// pass a prime number count value and it will return position string
function getPrimeAtPositionString(position){
  //  num = trackPosition(num);

    if(position % 10 == 1)
    {
        return "st";
    }
    else if(position % 10 == 2)
    {
        return "nd";
    }
    else if(position % 10 == 3)
    {
        return "rd";
    }
    else{
        return "th";
    }
}