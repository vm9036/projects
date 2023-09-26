
function jsonStringify()
{
    var text = document.getElementById("generatedJsonStringifyInputTextArea").value;
    let answer = jsonStringifyLogic(text);
    document.getElementById("generatedJsonStringifyOutputTextArea").value = answer;
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
document.getElementById("generatedJsonStringifyInputTextArea").value = testStr;
jsonStringify();
}

function jsonStringifyAuto(){
    if(document.getElementById("isAuto").checked)
    {
        jsonStringify();
    };
}
  