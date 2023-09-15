function generateRandomIntegerRange() {
  let howMany = Number(document.getElementById("count").value);
  console.log("howMany :-> " + howMany);

  let increasing = false;
  let decreasing = false;
  var radios = document.getElementsByName("integer");
  for (var radio of radios) {
    if (radio.checked) {
      if (radio.value == "increasing") {
        increasing = true;
      }

      if (radio.value == "decreasing") {
        decreasing = true;
      }
    }
  }
  console.log("increasing :->" + increasing);
  console.log("decreasing :->" + decreasing);

  let rangeEnd = Number(document.getElementById("range-end").value);
  console.log("rangeEnd :-> " + rangeEnd);

  let rangeStart = Number(document.getElementById("range-start").value);
  console.log("rangeStart :-> " + rangeStart);

  if (rangeEnd < rangeStart) {
    this.output.showWarningBadge(
      "Invalid ending range.",
      "Ending range is smaller than starting range."
    );
    return "";
  }
  if (rangeEnd == rangeStart) {
    this.output.showWarningBadge(
      "Only one result available.",
      "Starting range is equal to ending range."
    );
    return rangeStart;
  }
  var interval = rangeEnd - rangeStart + 1;
  if (interval == howMany) {
    this.output.showWarningBadge(
      "Randomization is not possible.",
      "There are exactly {0} numbers between {1} and {2} so the range is all these numbers.".format(
        interval,
        rangeStart,
        rangeEnd
      )
    );
    var ret = [];
    for (var i = rangeStart; i <= rangeEnd; i++) {
      ret.push(i);
    }
    return ret.join(", ");
  }
  if (interval < howMany) {
    this.output.showWarningBadge(
      "Can't generate a range.",
      "There are only {0} numbers in range {1} to {2} but you wanted {3}.".format(
        interval,
        rangeStart,
        rangeEnd,
        howMany
      )
    );
    return "";
  }
  var integers = [];
  var seen = {};
  while (integers.length != howMany) {
    var x = generateRandomNumber(rangeStart, rangeEnd);
    if (seen[x] === undefined) {
      seen[x] = 1;
      integers.push(x);
    }
  }
  var sortOrder = 1;
  if (decreasing) {
    sortOrder = -1;
  }
  let answer = integers
    .sort(function (a, b) {
      return sortOrder * (a - b);
    })
    .join(", ");

  document.getElementById("generatedRandomIntegerRangeTextArea").value = answer;
}

function generateRandomNumber(rangeStart, rangeEnd) {
  return Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
}

function copyGeneratedRandomIntegerRange() {
  copyToClipboard(
    document.getElementById("generatedRandomIntegerRangeTextArea").value
  );
  document.getElementById("generatedRandomIntegerRangeTextArea").select();
}
function downloadGeneratedData() {
  var blob = new Blob(
    [
      "" +
        document.getElementById("generatedRandomIntegerRangeTextArea").value +
        "",
    ],
    {
      type: "text/plain;charset=utf-8",
    }
  );
  fileDownloadCB(blob, gViewName + ".txt");
}
