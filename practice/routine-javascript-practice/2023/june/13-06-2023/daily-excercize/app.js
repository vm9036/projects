const buttons = document.querySelectorAll('.btn');
const inputText = document.getElementById("input-text");
const outputText = document.getElementById('output-text');
let activeButton = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (activeButton) {
      activeButton.classList.remove('is-primary');
    }
    button.classList.add('is-primary');
    activeButton = button;
    updateOutput();
    applyFormat(button.id);
    console.log('Button clicked:', button.id);
  });
});

const formatStyles = {
  'cursive-button': {
    fontFamily: 'cursive',
    fontWeight: '',
    textDecoration: '',
    fontStyle: ''
  },
  'bold-button': {
    fontFamily: '',
    fontWeight: 'bold',
    textDecoration: '',
    fontStyle: ''
  },
  'strike-through-button': {
    fontFamily: '',
    fontWeight: '',
    textDecoration: 'line-through',
    fontStyle: ''
  },
  'underline-button': {
    fontFamily: '',
    fontWeight: '',
    textDecoration: 'underline',
    fontStyle: ''
  },
  'italics-button': {
    fontFamily: '',
    fontWeight: '',
    textDecoration: '',
    fontStyle: 'italic'
  },
  'bold-italic-button': {
    fontFamily: '',
    fontWeight: 'bold',
    textDecoration: '',
    fontStyle: 'italic'
  },
  'bold-cursive-button': {
    fontFamily: 'cursive',
    fontWeight: 'bold',
    textDecoration: '',
    fontStyle: ''
  },
  'sans-bold-italic-button': {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    textDecoration: '',
    fontStyle: 'italic'
  },
  'serif-bold-italic-button': {
    fontFamily: 'serif',
    fontWeight: 'bold',
    textDecoration: '',
    fontStyle: 'italic'
  }
};

function applyFormat(buttonId) {
  const format = formatStyles[buttonId] || {};
  outputText.style.fontFamily = format.fontFamily || '';
  outputText.style.fontWeight = format.fontWeight || '';
  outputText.style.textDecoration = format.textDecoration || '';
  outputText.style.fontStyle = format.fontStyle || '';
}

inputText.addEventListener('input', updateOutput);

function updateOutput() {
  outputText.textContent = inputText.value;
  applyFormat(activeButton ? activeButton.id : null);
}

function copyOutputText() {
//   const outputText = document.getElementById('output-text');
//   const styledText = outputText.innerHTML;
//   const encodedText = unicoder.encode(styledText);

//   const temporaryInput = document.createElement('textarea');
//   temporaryInput.value = encodedText;
//   document.body.appendChild(temporaryInput);

//   temporaryInput.select();
//   document.execCommand('copy');

//   document.body.removeChild(temporaryInput);

//   copyButton.textContent = 'Copied!';
//   setTimeout(() => {
//     copyButton.textContent = 'Copy';
//   }, 2000);

var copyText = document.getElementById("output-text");

// Select the text field
copyText.select();
copyText.setSelectionRange(0, 99999); // For mobile devices

// Copy the text inside the text field
navigator.clipboard.writeText(copyText.value);

}

const copyButton = document.getElementById('copy-button');
copyButton.addEventListener('click', copyOutputText);



