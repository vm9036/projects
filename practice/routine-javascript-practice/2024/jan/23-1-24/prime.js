function primeNumber() {
    // let num = parseInt(document.getElementById("inputN").value);
    // let ans = 1, store = " ";
    // for(let  i  = 1; i<=num;i++)
    // {
    //     ans = getMeNextPrime(num);
    //     store = store + ans + " ";
    //     document.getElementById("displayNum").innerHTML = ans;
    // }

    // let ansPre = 53, store = " ";
    // for (let i = 1; i <= num; i++) {
    //     ansPre = getMePrePrime(ansPre);
    //     if(ansPre < 1)
    //     {
    //         alert("negetive number is not valid in prime number.")
    //         break;
    //     }
    //     store = store + ansPre + " ";
    //     document.getElementById("displayNum").innerHTML = store;
    // }
    printPrime1To100();
}

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

function getMeNextPrime(next) {
    for (let i = next + 1; ; i++) {
        if (isPrime(i)) {
            return i;
        }
    }
}

function getMePrePrime(pre) {
    for (let i = pre - 1; ; i--) {
        if (isPrime(i)) {
            return i;
        }
    }
}

function printPrime1To100() {

    let store = " ";
    for (let i = 1; i < 100; i++) {

        if (i == 3) {
            store = store + i + " ";
        }
        i = getMeNextPrime(i);
        store = store + i + " ";
        if(getMeNextPrime(i) >= 100)
        {
            break;
        }
    }
    document.getElementById("displayNum").innerHTML = store;
}