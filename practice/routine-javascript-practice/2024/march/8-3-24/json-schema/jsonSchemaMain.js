// JSON Input
let editorInput = document.querySelector("#editorInput");

ace.edit(editorInput, {
    theme: "ace/theme/github",
    mode: "ace/mode/javascript"
})

// JSON Output
let editorOutput = document.querySelector("#editorOutput");
ace.edit(editorOutput, {
    theme: "ace/theme/chrome",
    mode: "ace/mode/javascript"
})

function darkMode(){
    let darkMode = document.getElementById("editorInput");
    darkMode.style.backgroundColor = "white";
}
