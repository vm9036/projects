
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
    let testStr =`Hakuna Matata!
What a wonderful phrase
Hakuna Matata!
Ain't no passing craze
Yeah. It's our motto!
What's a motto?
    "Hakuna Matata!"`;
document.getElementById("generatedJsonStringifyInputTextArea").value = testStr;
jsonStringify();
}