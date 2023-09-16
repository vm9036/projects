/* start model function*/
document.addEventListener("DOMContentLoaded", () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add("is-active");
      var copyText = document.getElementById("myInput");
      copyText.style.background = "";
      copyText.style.color = "";
  
      copyText.value = svgImg.innerHTML;
      //alert(svgImg.innerHTML);
    }
  
    function closeModal($el) {
      $el.classList.remove("is-active");
    }
  
    function closeAllModals() {
      (document.querySelectorAll(".modal") || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll(".js-modal-trigger") || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener("click", () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (
      document.querySelectorAll(
        ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
      ) || []
    ).forEach(($close) => {
      const $target = $close.closest(".modal");
  
      $close.addEventListener("click", () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener("keydown", (event) => {
      const e = event || window.event;
  
      if (e.keyCode === 27) {
        // Escape key
        closeAllModals();
      }
    });
  });
  /*end model function*/
  
  function copyText() {
    const buttonDiv = document.getElementById("buttonDiv");
    buttonDiv.style.display = "none";
  
    var copyText = document.getElementById("myInput");
    copyText.style.background = "#08BDBA";
    copyText.style.color = "white";
  
    // copyText.value = svgImg.innerHTML;
    // alert(copyText.value);
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    //alert("Copied the text: " + copyText.value);
    /*var copyText = document.getElementById("myInput");
    copyText.style.background = "#08BDBA";
    copyText.style.color = "white";
    navigator.clipboard.writeText(copyText.innerText);
    alert("Copied the text: " + copyText.innerText);*/
  }
  
  function updateInput(innerHTML) {
    alert(innerHTML);
  
    document.getElementById("myInput").value =
      document.getElementById("svgCodeCopy").innerHTML;
  }