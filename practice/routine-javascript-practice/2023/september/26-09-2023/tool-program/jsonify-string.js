
function jsonStringify()
{
    var text = document.getElementById("InputTextArea").value;
    let answer = jsonStringifyLogic(text);
    document.getElementById("OutputTextArea").value = answer;
}

function jsonStringifyLogic(text)
{
    return JSON.stringify(text);
}

function sampleBtn() {
    let testStr =`var employee = {
        "name" : "john",
        "age" : "35" ,
        "country" : "CANADA",
        "interests" : "Javascript"
}`;
document.getElementById("InputTextArea").value = testStr;
jsonStringify();
}

function jsonStringifyAuto(){
    if(document.getElementById("isAuto").checked)
    {
        jsonStringify();
    };
}
  