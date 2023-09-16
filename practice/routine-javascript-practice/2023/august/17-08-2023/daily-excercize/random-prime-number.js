function randomPrimeNumber() {
    // var tool = this;
    var options = parseOptions(tool);
    // if (!options) {
    //     tool.output.setValue("");
    //     return;
    // }
    var primes = [];
    var possiblePrimesList = [];
    var start = options.rangeStart;
    var startPrimality = isPrime(start);
    if (start < 5) {
        if (start < 4) {
            possiblePrimesList.push(3);
        }
        if (start < 3) {
            possiblePrimesList.push(2);
        }
        start = 5;
    } else if (!startPrimality && start % 2 == 0 && start % 3 == 0) {
        possiblePrimesList.push(start + 1);
        start += 5;
    } else if (startPrimality && (start + 1) % 2 == 0 && (start + 1) % 3 != 0) {
        possiblePrimesList.push(start);
        start += 4;
    } else if (!startPrimality && start % 2 == 0 && (start + 1) % 3 == 0) {
        start += 3;
    } else if (!startPrimality && start % 2 != 0 && start % 3 == 0) {
        start += 2;
    } else if (!startPrimality && start % 2 == 0 && (start - 1) % 3 == 0) {
        start += 1;
    } else if (!startPrimality && (start - 1) % 2 == 0 && (start - 1) % 3 == 0) {
        start += 4;
    }
    for (var i = start; i <= options.rangeEnd; i += 6) {
        if (i % 5 == 0) {
            possiblePrimesList.push(i + 2);
            continue;
        }
        possiblePrimesList.push(i);
        possiblePrimesList.push(i + 2);
    }
    if (possiblePrimesList.length != 0) {
        for (var i = 0; primes.length < options.count; i++) {
            var j = Math.floor(Math.random() * possiblePrimesList.length);
            var possiblePrime = possiblePrimesList[j];
            if (isPrime(possiblePrime)) {
                primes.push(possiblePrime);
            }
            possiblePrimesList.splice(j, 1);
            if (possiblePrimesList.length == 0) {
                break;
            }
        }
    }
    if (primes.length < options.count) {
        tool.output.showWarningBadge("Not enough primes.", "There are only {0} primes in range {1} to {2} but you wanted to generate {3}.".format(primes.length, options.rangeStart, options.rangeEnd, options.count));
    }
    // return primes.join(options.sep);
    document.getElementById("displayRandomPrime").value = primes;
}
function isPrime(n) {
    if (n <= 1)
        return false;
    if (n <= 3)
        return true;
    if (n % 2 == 0 || n % 3 == 0) {
        return false;
    }
    var sqrtN = Math.sqrt(n);
    for (var i = 5; i <= sqrtN; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}
function parseOptions(tool) {
    // var options = tool.options.get();
    // var sep = options["separator"] || "\n";
    var sep = document.getElementById("separator").value;
    if (sep == "\\n"){
        sep = "\n";
    }

    // var rangeStart = options["range-start"].trim();
    var rangeStart = document.getElementById("range-start").value;

    if (!/^-?\d+$/.test(rangeStart)) {
        tool.output.showNegativeBadge("Invalid start range.", "Start of the range contains non digits.");
        return false;
    }
    rangeStart = parseInt(rangeStart);
    if (rangeStart < 2) {
        tool.output.showNegativeBadge("Invalid start range.", "Primes start at 2 but you specified {0}.".format(rangeStart));
        return false;
    }
    // var rangeEnd = options["range-end"].trim();
    var rangeEnd = document.getElementById("range-end").value;
    if (!/^-?\d+$/.test(rangeEnd)) {
        tool.output.showNegativeBadge("Invalid end range.", "End of the range contains non digits.");
        return false;
    }
    rangeEnd = parseInt(rangeEnd);
    if (rangeEnd < rangeStart) {
        tool.output.showNegativeBadge("Invalid range.", "End of the range is less than the start.");
        return false;
    }
    // var count = options["count"].trim();
    var count = document.getElementById("count").value;
    if (!/^\d+$/.test(count)) {
        tool.output.showNegativeBadge("Invalid count.", "Count contains non digits.");
        return false;
    }
    count = parseInt(count);
    if (count < 1) {
        tool.output.showNegativeBadge("Invalid count.", "You can't generate less than one prime number.");
        return false;
    }
    // return {
    //     rangeStart: rangeStart,
    //     rangeEnd: rangeEnd,
    //     count: count,
    //     sep: sep
    // }
}