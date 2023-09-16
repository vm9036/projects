const stopWords = ["a", "an", "and", "are", "as", "at", "be", "by", "for", "from", "has", "he", "in", "is", "it", "its", "of", "on", "that", "the", "to", "was", "were", "will", "with", "about", "above", "after", "again", "against", "all", "am", "an", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during", "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my", "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"];

const inputText = document.getElementById("inputText");
const slugifyButton = document.getElementById("slugifyButton");
const clearButton = document.getElementById("clearButton");
const resetButton = document.getElementById("resetButton");
const separatorButtons = document.querySelectorAll(".buttons button");
const copyButton = document.getElementById('copyButton');
const outputSlug = document.getElementById('outputSlug');
const autoCheckbox = document.getElementById('autoSlugify');

function slugifyText() {
  const text = inputText.value.trim();
  const separator = document.querySelector(".buttons button.is-selected").getAttribute("data-value");
  const removeStopWords = document.getElementById("removeStopWords").checked;
  const removeNumbers = document.getElementById("removeNumbers").checked;

  let words = text.split(/[\s_-]+/);
  if (removeStopWords) {
    words = words.filter(word => !stopWords.includes(word.toLowerCase()));
  }
  if (removeNumbers) {
    words = words.map(word => word.replace(/[0-9]/g, ""));
  }

  const slug = words.join(separator).toLowerCase();
  outputSlug.value = slug;
}

function autoSlugify() {
  if (autoCheckbox.checked) {
    slugifyText();
  }
}

inputText.addEventListener("keyup", () => {
  autoSlugify();
});

autoCheckbox.addEventListener("click", () => {
  autoSlugify();
});

document.getElementById("removeStopWords").addEventListener("click", () => {
  autoSlugify();
});

document.getElementById("removeNumbers").addEventListener("click", () => {
  autoSlugify();
});

separatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    autoSlugify();
    separatorButtons.forEach(btn => btn.classList.remove("is-primary", "is-selected"));
    button.classList.add("is-primary", "is-selected");
  });
});

slugifyButton.addEventListener("click", () => {
  autoCheckbox.checked = false;
  slugifyText();
});

clearButton.addEventListener("click", () => {
  inputText.value = "";
  outputSlug.value = "";
});

resetButton.addEventListener("click", () => {
  document.getElementById("removeStopWords").checked = false;
  document.getElementById("removeNumbers").checked = false;
  document.querySelector(".buttons button[data-value='-']").classList.add("is-primary");
  document.querySelector(".buttons button[data-value='_']").classList.remove("is-primary");
  inputText.value = "";
  outputSlug.value = "";
});

copyButton.addEventListener("click", () => {
  outputSlug.select();
  outputSlug.setSelectionRange(0, 99999);
  document.execCommand("copy");

  copyButton.textContent = "Copied!";

  setTimeout(() => {
    copyButton.textContent = "Copy";
  }, 2000);
});
