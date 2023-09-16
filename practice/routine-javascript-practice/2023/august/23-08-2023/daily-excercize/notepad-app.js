const saveButton = document.getElementById("saveBtn");
const clearButton = document.getElementById("clearBtn");
const textArea = document.getElementById("text-area");
// Check if there is previously saved text and populate the textarea
window.addEventListener("DOMContentLoaded", () => {
  var savedText = localStorage.getItem("notepadText");
  if (savedText) {
    document.getElementById("text-area").value = savedText;
  }
});

function uploadFile(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const fileContent = e.target.result;
    textArea.value = fileContent;
    localStorage.setItem("notepadText", fileContent);
  };

  reader.readAsText(file);
}

// Array to store the textHistroy of text changes
var textHistroy = [];
var currentIndex = -1;

// Save the note to local storage whenever the text changes
textArea.addEventListener("input", () => {
  var note = textArea.value;

  // Store the current text in the textHistroy
  if (currentIndex < textHistroy.length - 1) {
    // If there are redo steps remaining, discard them
    textHistroy = textHistroy.slice(0, currentIndex + 1);
  }

  textHistroy.push(note);
  currentIndex++;

  localStorage.setItem("notepadText", note);
});

// Function to update the textarea with a specific text from the textHistroy
function updateTextAreaWithText(index) {
  if (index >= 0 && index < textHistroy.length) {
    textArea.value = textHistroy[index];
    currentIndex = index;
  }
}

// Undo the last action
function undo() {
  if (currentIndex > 0) {
    updateTextAreaWithText(currentIndex - 1);
  }
}

// Redo the last undone action
function redo() {
  if (currentIndex < textHistroy.length - 1) {
    updateTextAreaWithText(currentIndex + 1);
  }
}

saveButton.addEventListener("click", () => {
  let notes = document.getElementById("text-area").value;
  if (notes !== "") {
    let blob = new Blob([notes], { type: "text/plain" });
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = "file.txt";
    a.click();
    URL.revokeObjectURL(url);
    alert("Notes saved!");
  }
});

clearButton.addEventListener("click", () => {
  clearNote();
  localStorage.removeItem("notepadText");
});

const copyText = () => {
  let selectedText = textArea.value.substring(
    textArea.selectionStart,
    textArea.selectionEnd
  );
  console.log(selectedText);
  if (selectedText !== "") {
    navigator.clipboard
      .writeText(selectedText)
      .then(function () {
        alert("Text copied!");
      })
      .catch(function (error) {
        console.error("Unable to copy text: ", error);
      });
  } else {
    alert("No text selected!");
  }
};

// Cut the selected text
function cutText() {
  var textarea = document.getElementById("text-area");
  var selectedText = textarea.value.substring(
    textarea.selectionStart,
    textarea.selectionEnd
  );

  if (selectedText !== "") {
    navigator.clipboard
      .writeText(selectedText)
      .then(function () {
        // Remove the selected text from the textarea
        var currentValue = textarea.value;
        var newValue =
          currentValue.substring(0, textarea.selectionStart) +
          currentValue.substring(textarea.selectionEnd);

        textarea.value = newValue;
        localStorage.setItem("notepadText", newValue); // Save the updated text to local storage
      })
      .catch(function (error) {
        console.error("Unable to cut text: ", error);
      });
  } else {
    alert("No text selected!");
  }
}

// Paste the copied text
const pasteText = () => {
  var textarea = document.getElementById("text-area");
  textarea.focus();

  navigator.clipboard
    .readText()
    .then(function (copiedText) {
      // Insert the copied text at the current cursor position
      var startPosition = textarea.selectionStart;
      var endPosition = textarea.selectionEnd;

      var currentValue = textarea.value;
      var newValue =
        currentValue.substring(0, startPosition) +
        copiedText +
        currentValue.substring(endPosition);

      textarea.value = newValue;
    })
    .catch(function (error) {
      console.error("Unable to paste text: ", error);
    });
  localStorage.setItem("notepadText", textArea.value);
};

const saveNote = () => {
  var note = document.getElementById("text-area").value;
  localStorage.setItem("note", note);
  alert("Note saved!");
};

const clearNote = () => {
  document.getElementById("text-area").value = "";
};

function increaseFont() {
  let currentFontSize = parseInt(window.getComputedStyle(textArea).fontSize);
  if(currentFontSize>=24) currentFontSize -= 1;
  const newFontSize = currentFontSize + 1;
  textArea.style.fontSize = `${newFontSize}px`;
}

function decreaseFont() {
  let currentFontSize = parseInt(window.getComputedStyle(textArea).fontSize);
  if (currentFontSize <= 6) currentFontSize += 1;
  const newFontSize = currentFontSize - 1;
  textArea.style.fontSize = `${newFontSize}px`;
}

function updateStats() {
  const textarea = document.getElementById("text-area");
  const currentRowElement = document.getElementById("current-row");
  const currentColumnElement = document.getElementById("current-column");
  const totalWordsElement = document.getElementById("total-words");
  const totalCharactersElement = document.getElementById("total-characters");
  const text = textarea.value;
  const cursorIndex = textarea.selectionStart;
  const lines = text.substr(0, cursorIndex).split("\n");
  const currentRow = lines.length;
  const currentColumn = lines[lines.length - 1].length + 1;
  const words = text.trim().split(/\s+/);
  const totalWords = words.length;
  const totalCharacters = text.length;

  currentRowElement.textContent = `Row: ${currentRow}`;
  currentColumnElement.textContent = `Column: ${currentColumn}`;
  totalWordsElement.textContent = `Words: ${totalWords}`;
  totalCharactersElement.textContent = `Characters: ${totalCharacters}`;
}



function changeFontFamily() {
  const fontFamilySelect = document.getElementById('font-family-select');
  const selectedFont = fontFamilySelect.value;
  textArea.style.fontFamily = selectedFont;
}

