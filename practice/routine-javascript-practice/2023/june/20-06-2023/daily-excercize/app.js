const inputArea = document.getElementById("inputarea");
const outputArea = document.getElementById("outputarea");
const autoPreviewCheckbox = document.getElementById("autoPreview");

inputArea.addEventListener('input',function(){
  if(autoPreviewCheckbox.checked){
    TextToPunny();
  }
})
outputArea.addEventListener('input',function(){
  if(autoPreviewCheckbox.checked){
    PunnyToText();
  }
})
function TextToPunny() {
  const inputText = inputArea.value;
  if (/[\u0080-\uffff]/.test(inputText)) {
    const punycodeText = punycode.toASCII(inputText);
    outputArea.value = punycodeText;
  } else {
    outputArea.value = inputText;
  }
}
function PunnyToText() {
  const punycodeText = outputArea.value;
  try {
    const inputText = punycode.toUnicode(punycodeText);
    inputArea.value = inputText;
  } catch (err) {
    inputArea.value = punycodeText;
  }
}
function copyText(id) {
  var textarea = document.getElementById(id);
  textarea.select();
  document.execCommand("copy");
}