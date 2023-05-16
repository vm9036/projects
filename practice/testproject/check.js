function createLinks() {
    let contentInputValue = document.getElementById("contentInputValue").value;
    let emailSubjectInputValue = document.getElementById("emailSubjectInputValue").value;
    let emailCcInputValue = document.getElementById("emailCcInputValue").value;
    let emailBccInputValue = document.getElementById("emailBccInputValue").value;
    let emailBodyInputValue = document.getElementById("emailBodyInputValue").value;


    let facebookInputAnswer = `https://www.facebook.com/sharer/sharer.php?u=${contentInputValue}`;
    let twitterInputAnswer = `https://twitter.com/intent/tweet?url=${contentInputValue}&text=`;
    let pinterestInputAnswer = `http://pinterest.com/pin/create/button/?url=${contentInputValue}&media=&description=`;
    let linkedInInputAnswer = `http://www.linkedin.com/shareArticle?mini=true&url=${contentInputValue}&title=`;
    let whatsAppInputAnswer = `whatsapp://send?text=${contentInputValue}`;
    let bufferInputAnswer = `https://buffer.com/add?text=&url=${contentInputValue}`;
    let diggInputAnswer = `https://reddit.com/submit?url=${contentInputValue}&title=`;
    let tumblrInputAnswer = `http://www.tumblr.com/share?v=3&u=${contentInputValue}&t=`;
    let redditInputAnswer = `https://reddit.com/submit?url=${contentInputValue}&title=`;
    let stumbleuponInputAnswer = `https://www.stumbleupon.com/submit?url=${contentInputValue}&title=`;
    let deliciousInputAnswer = `https://delicious.com/save?v=5&provider=%7Bprovider%7D&noui&jump=close&url=${contentInputValue}&title=`;
    let emailInputAnswer = `mailto:${contentInputValue}?`
    let emailSubjectAnswer = `subject=${emailSubjectInputValue}`;
    let emailCcAnswer = `&cc=${emailCcInputValue}`;
    let emailBccAnswer = `&bcc=${emailBccInputValue}`;
    let emailBodyAnswer = `&body=${emailBodyInputValue}`;


    document.getElementById("facebookInputBox").value = facebookInputAnswer;
    document.getElementById("twitterInputBox").value = twitterInputAnswer;
    document.getElementById("pinterestInputBox").value = pinterestInputAnswer;
    document.getElementById("linkedInInputBox").value = linkedInInputAnswer;
    document.getElementById("whatsAppInputBox").value = whatsAppInputAnswer;
    document.getElementById("bufferInputBox").value = bufferInputAnswer;
    document.getElementById("diggInputBox").value = diggInputAnswer;
    document.getElementById("trumblrInputBox").value = tumblrInputAnswer;
    document.getElementById("redditInputBox").value = redditInputAnswer;
    document.getElementById("stumbleuponInputBox").value = stumbleuponInputAnswer;
    document.getElementById("deliciousInputBox").value = deliciousInputAnswer;
    document.getElementById("emailInputBox").value = emailInputAnswer + emailSubjectAnswer + emailCcAnswer + emailBccAnswer + emailBodyAnswer;


    createFacebookHtmlCode(true);
    createTwitterHtmlCode(true);
    createPinterestHtmlCode(true);
    createLinkedInHtmlCode(true);
    createWhatsAppHtmlCode(true);
    createBufferHtmlCode(true);
    createDiggHtmlCode(true);
    createTumblrHtmlCode(true);
    createRedditHtmlCode(true);
    createStumbleuponHtmlCode(true);
    createDeliciousHtmlCode(true);
    createEmailHtmlCode(true);
}
function createSample() {

    let emialIdSample = document.getElementById("showEmailColor")
    if (emialIdSample.className == " is-active ") {
        const emailSampleCode = "gunatit36@gmail.com";
        document.getElementById("contentInputValue").value = emailSampleCode;
        createLinks();
    }
    else {
        const sampleCode = "https://codebeautify.org/";
        document.getElementById("contentInputValue").value = sampleCode;
        createLinks();
    }

}
function checkAutomaticPrintValues() {
    let checkBox = document.getElementById("autoPrintCheckBox");
    if (checkBox.checked == true) {
        createLinks();
    }
}
function refreshPage() {
    location.reload();
}
function hideAll() {
    document.getElementById("showTwitterInputBox").style.display = "none";
    document.getElementById("showPinterestInputBox").style.display = "none";
    document.getElementById("showLinkedInInputBox").style.display = "none";
    document.getElementById("showWhatsAppInputBox").style.display = "none";
    document.getElementById("showBufferInputBox").style.display = "none";
    document.getElementById("showDiggInputBox").style.display = "none";
    document.getElementById("showTumblrInputBox").style.display = "none";
    document.getElementById("showRedditInputBox").style.display = "none";
    document.getElementById("showStumbleuponInputBox").style.display = "none";
    document.getElementById("showDeliciousInputBox").style.display = "none";
    document.getElementById("showEmailInputBox").style.display = "none";
    document.getElementById("showFacebookInputBox").style.display = "none";
}
function deactivateSideBarAll() {
    document.getElementById("showFacebookColor").className = "none";
    document.getElementById("showTwitterColor").className = "none";
    document.getElementById("showPinterestColor").className = "none";
    document.getElementById("showLinkedInColor").className = "none";
    document.getElementById("showWhatsAppColor").className = "none";
    document.getElementById("showBufferColor").className = "none";
    document.getElementById("showDiggColor").className = "none";
    document.getElementById("showTumblrColor").className = "none";
    document.getElementById("showRedditColor").className = "none";
    document.getElementById("showStumbleuponColor").className = "none";
    document.getElementById("showDeliciousColor").className = "none";
    document.getElementById("showEmailColor").className = "none";
    document.getElementById("showAllOptionActiveColor").className = "none";
}
function activateLink(inputBox, color, htmlCode) {
    hideEmailOptions();
    hideAll();
    hideHtmlCode();
    document.getElementById(inputBox).style.display = "";
    deactivateSideBarAll();
    if (color == "showEmailColor") {
        document.getElementById(color).className = " is-active ";
    }
    else {
        document.getElementById(color).className = "is-active";
    }
    if (htmlCode == "showFacebookHtmlCode") {
        createFacebookHtmlCode();
    }
    if (htmlCode == "showTwitterHtmlCode") {
        createTwitterHtmlCode();
    }
    if (htmlCode == "showPinterestHtmlCode") {
        createPinterestHtmlCode();
    }
    if (htmlCode == "showLinkedInHtmlCode") {
        createLinkedInHtmlCode();
    }
    if (htmlCode == "showWhatsAppHtmlCode") {
        createWhatsAppHtmlCode();
    }
    if (htmlCode == "showBufferHtmlCode") {
        createBufferHtmlCode();
    }
    if (htmlCode == "showDiggHtmlCode") {
        createDiggHtmlCode();
    }
    if (htmlCode == "showTumblrHtmlCode") {
        createTumblrHtmlCode();
    }
    if (htmlCode == "showRedditHtmlCode") {
        createRedditHtmlCode();
    }
    if (htmlCode == "showStumbleuponHtmlCode") {
        createStumbleuponHtmlCode();
    }
    if (htmlCode == "showDeliciousHtmlCode") {
        createDeliciousHtmlCode();
    }
    if (htmlCode == "showEmailHtmlCode") {
        createEmailHtmlCode(9);
    }
}
function hideHtmlCode() {
    let showFacebookHtmlInputBox = document.getElementById("showFacebookHtmlCode");
    if (showFacebookHtmlInputBox.className == "block") {
        showFacebookHtmlInputBox.className = "block is-hidden";
    }
    let twitterHtmlInputBox = document.getElementById("showTwitterHtmlCode");
    if (twitterHtmlInputBox.className == "block") {
        twitterHtmlInputBox.className = "block is-hidden";
    }
    let pinterestHtmlInputBox = document.getElementById("showPinterestHtmlCode");
    if (pinterestHtmlInputBox.className == "block") {
        pinterestHtmlInputBox.className = "block is-hidden";
    }
    let showLinkedInHtmlInputBox = document.getElementById("showLinkedInHtmlCode");
    if (showLinkedInHtmlInputBox.className == "block") {
        showLinkedInHtmlInputBox.className = "block is-hidden";
    }
    let showWhatsAppHtmlInputBox = document.getElementById("showWhatsAppHtmlCode");
    if (showWhatsAppHtmlInputBox.className == "block") {
        showWhatsAppHtmlInputBox.className = "block is-hidden";
    }
    let showBufferHtmlInputBox = document.getElementById("showBufferHtmlCode");
    if (showBufferHtmlInputBox.className == "block") {
        showBufferHtmlInputBox.className = "block is-hidden";
    }
    let showDiggHtmlInputBox = document.getElementById("showDiggHtmlCode");
    if (showDiggHtmlInputBox.className == "block") {
        showDiggHtmlInputBox.className = "block is-hidden";
    }
    let showTumblrHtmlInputBox = document.getElementById("showTumblrHtmlCode");
    if (showTumblrHtmlInputBox.className == "block") {
        showTumblrHtmlInputBox.className = "block is-hidden";
    }
    let showRedditHtmlInputBox = document.getElementById("showRedditHtmlCode");
    if (showRedditHtmlInputBox.className == "block") {
        showRedditHtmlInputBox.className = "block is-hidden";
    }
    let showStumbleuponHtmlInputBox = document.getElementById("showStumbleuponHtmlCode");
    if (showStumbleuponHtmlInputBox.className == "block") {
        showStumbleuponHtmlInputBox.className = "block is-hidden";
    }
    let showDeliciousHtmlInputBox = document.getElementById("showDeliciousHtmlCode");
    if (showDeliciousHtmlInputBox.className == "block") {
        showDeliciousHtmlInputBox.className = "block is-hidden";
    }
    let showEmailHtmlInputBox = document.getElementById("showEmailHtmlCode");
    if (showEmailHtmlInputBox.className == "block") {
        showEmailHtmlInputBox.className = "block is-hidden";
    }
}
function showAll() {
    document.getElementById("showTwitterInputBox").style.display = "";
    document.getElementById("showPinterestInputBox").style.display = "";
    document.getElementById("showLinkedInInputBox").style.display = "";
    document.getElementById("showWhatsAppInputBox").style.display = "";
    document.getElementById("showBufferInputBox").style.display = "";
    document.getElementById("showDiggInputBox").style.display = "";
    document.getElementById("showTumblrInputBox").style.display = "";
    document.getElementById("showRedditInputBox").style.display = "";
    document.getElementById("showStumbleuponInputBox").style.display = "";
    document.getElementById("showDeliciousInputBox").style.display = "";
    document.getElementById("showEmailInputBox").style.display = "";
    document.getElementById("showFacebookInputBox").style.display = "";
}
function showAllOptionActiveColor(sideBarLinkId) {
    hideEmailOptions();
    hideHtmlCode();
    showAll();
    deactivateSideBarAll();
    document.getElementById(sideBarLinkId).className = "is-active";
}
function copySocialLink(socialLink, socialCopy, socialText) {
    var copyText = document.getElementById(socialText);
    console.log("socialText  " + socialText)
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    document.getElementById(socialLink).style.display = "none";
    console.log("socialLink  " + socialLink)
    var tooltip = document.getElementById(socialCopy);
    tooltip.innerHTML = tooltip.innerHTML + "Copied:";
    console.log("socialCopy   " + socialCopy)
    setTimeout(() => {
        tooltip.innerHTML = tooltip.innerHTML.replace("Copied:", "");
        document.getElementById(socialLink).style.display = "";
    }, 1000);
}
function createFacebookHtmlCode(isLocalKeepOpen) {
    let facebook;
    let preview;
    let contentInputValue;
    if (isLocalKeepOpen == false) {
        contentInputValue = document.getElementById("contentInputValue").value;
        let facebookOpenLink = document.getElementById("facebookOpenLink");
        facebookOpenLink.href = `https://www.facebook.com/sharer/sharer.php?u=${contentInputValue}`;
    }
    else {
        contentInputValue = document.getElementById("contentInputValue").value;
        let previewInputBox = document.getElementById("previewInputBox").value;
        if (previewInputBox.length == 0) {
            preview = `<a  target="_blank" href="https://www.facebook.com/sharer/sharer.php?u='${contentInputValue}'">Share on Facebook</a>`;
            facebook = '<a href="https://www.facebook.com/sharer/sharer.php?u=' + contentInputValue + '">Share on Facebook</a>';
        } else {
            facebook = `<a href="https://www.facebook.com/sharer/sharer.php?u=' ${contentInputValue}'">${previewInputBox}</a>`;
            preview = `<a  target="_blank" href="https://www.facebook.com/sharer/sharer.php?u='${contentInputValue}'">${previewInputBox}</a>`;
        }

        document.getElementById("printFacebookHtmlCode").value = facebook;
        document.getElementById("printFacebookPreview").innerHTML = preview;
        printFacebookHtmlCode.oninput = function () {
            printFacebookPreview.innerHTML = printFacebookHtmlCode.value;
        }
        if (isLocalKeepOpen != true) {
            let showFacebookHtmlInputBox = document.getElementById("showFacebookHtmlCode");
            if (showFacebookHtmlInputBox.className == "block is-hidden") {
                showFacebookHtmlInputBox.className = "block";
            }
            else {
                showFacebookHtmlInputBox.className = "block is-hidden";
            }
        }
    }
}
function createTwitterHtmlCode(isLocalKeepOpen) {

    let contentInputValue;
    let twitter;
    let preview;
    if (isLocalKeepOpen == false) {
        contentInputValue = document.getElementById("contentInputValue").value;
        let twitterOpenLink = document.getElementById("twitterOpenLink");
        twitterOpenLink.href = `https://twitter.com/intent/tweet?url=${contentInputValue}&text=`;
    }
    else {
        contentInputValue = document.getElementById("contentInputValue").value;
        let previewInputBox = document.getElementById("previewInputBox").value;
        if (previewInputBox.length == 0) {
            preview = `<a target="_blank" href="https://twitter.com/intent/tweet?text=${contentInputValue}">Share on Twitter</a>`;
            twitter = `<a href="https://twitter.com/intent/tweet?text=${contentInputValue}">Share on Twitter</a>`;
        }
        else {
            twitter = `<a href="https://twitter.com/intent/tweet?text=${contentInputValue}">${previewInputBox}</a>`;
            preview = `<a target="_blank" href="https://twitter.com/intent/tweet?text=${contentInputValue}">${previewInputBox}</a>`;
        }
        document.getElementById("printTwitterHtmlCode").value = twitter;
        document.getElementById("printTwitterPreview").innerHTML = preview;
        printTwitterHtmlCode.oninput = function () {
            printTwitterPreview.innerHTML = printTwitterHtmlCode.value;
        }
        if (isLocalKeepOpen != true) {
            let twitterInputBox = document.getElementById("showTwitterHtmlCode");
            if (twitterInputBox.className == "block is-hidden") {
                twitterInputBox.className = "block";
            } else {
                twitterInputBox.className = "block is-hidden";
            }
        }
    }
}
function createPinterestHtmlCode(isLocalKeepOpen) {
    let contentInputValue;
    let preview;
    let pinterest
    if (isLocalKeepOpen == false) {
        contentInputValue = document.getElementById("contentInputValue").value;
        let pinterestOpenLink = document.getElementById("pinterestOpenLink");
        pinterestOpenLink.href = `http://pinterest.com/pin/create/button/?url=${contentInputValue}&media=&description=`;
    }
    else {
        contentInputValue = document.getElementById("contentInputValue").value;
        let previewInputBox = document.getElementById("previewInputBox").value;
        if (previewInputBox.length == 0) {
            preview = `<a target="_blank"  href="https://www.pinterest.com/pin/create/button?url=${contentInputValue}&media=&description=" rel="nofollow noopener">Share on Pinterest</a>
        `;
            pinterest = `<a target="_blank"  href="https://www.pinterest.com/pin/create/button?url=${contentInputValue}&media=&description=" rel="nofollow noopener">Share on Pinterest</a>
        `;
        }
        else {
            pinterest = `<a target="_blank"  href="https://www.pinterest.com/pin/create/button?url= ${contentInputValue}&media=&description=" rel="nofollow noopener">${previewInputBox}</a>`;
            preview = `<a target="_blank"  href="https://www.pinterest.com/pin/create/button?url=${contentInputValue}&media=&description=" rel="nofollow noopener">${previewInputBox}</a>`;

        }
        document.getElementById("printPinterestHtmlCode").value = pinterest;
        document.getElementById("printPinterestPreview").innerHTML = preview;
        printPinterestHtmlCode.oninput = function () {
            printPinterestPreview.innerHTML = printPinterestHtmlCode.value;
        }
        if (isLocalKeepOpen != true) {
            let pinterestHtmlInputBox = document.getElementById("showPinterestHtmlCode");
            if (pinterestHtmlInputBox.className == "block is-hidden") {
                pinterestHtmlInputBox.className = "block";
            } else {
                pinterestHtmlInputBox.className = "block is-hidden";
            }
        }
    }
}
function createLinkedInHtmlCode(isLocalKeepOpen) {
    let linkedIn;
    let preview;
    let contentInputValue;
    if (isLocalKeepOpen == false) {
        contentInputValue = document.getElementById("contentInputValue").value;
        let linkedInOpenLink = document.getElementById("linkedInOpenLink");
        linkedInOpenLink.href = `http://www.linkedin.com/shareArticle?mini=true&url=${contentInputValue}&title=`;
    }
    else {


        contentInputValue = document.getElementById("contentInputValue").value;
        let previewInputBox = document.getElementById("previewInputBox").value;
        if (previewInputBox.length == 0) {
            preview = `<a  target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=${contentInputValue}">Share on LinkedIn</a>`;
            linkedIn = `<a  target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=${contentInputValue}">Share on LinkedIn</a>`;
        }
        else {
            linkedIn = ` <a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url= ${contentInputValue}">${previewInputBox}</a>`;
            preview = ` <a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=${contentInputValue}">${previewInputBox}</a>`;
        }
        document.getElementById("printLinkedInHtmlCode").value = linkedIn;
        document.getElementById("printLinkedInPreview").innerHTML = preview;
        printLinkedInHtmlCode.oninput = function () {
            printLinkedInPreview.innerHTML = printLinkedInHtmlCode.value;
        }

        if (isLocalKeepOpen != true) {
            let showLinkedInHtmlInputBox = document.getElementById("showLinkedInHtmlCode");
            if (showLinkedInHtmlInputBox.className == "block is-hidden") {
                showLinkedInHtmlInputBox.className = "block";
            } else {
                showLinkedInHtmlInputBox.className = "block is-hidden";
            }
        }
    }
}
function createWhatsAppHtmlCode(isLocalKeepOpen) {

    let whatsApp;
    let preview;
    let contentInputValue;
    if (isLocalKeepOpen == false) {
        contentInputValue = document.getElementById("contentInputValue").value;
        let whatsAppOpenLink = document.getElementById("whatsAppOpenLink");
        whatsAppOpenLink.href = `whatsapp://send?text=${contentInputValue}`;
    }
    else {
        contentInputValue = document.getElementById("contentInputValue").value;
        let previewInputBox = document.getElementById("previewInputBox").value;
        if (previewInputBox.length == 0) {
            preview = `<a href="whatsapp://send?text=${contentInputValue}" target="_blank" rel="nofollow noopener">Share on WhatsApp</a>`;
            whatsApp = `<a href="whatsapp://send?text=${contentInputValue}" target="_blank" rel="nofollow noopener">Share on WhatsApp</a>`;
        }
        else {
            whatsApp = ` <a href="whatsapp://send?text=${contentInputValue}" target="_blank" rel="nofollow noopener">${previewInputBox}</a>`;
            preview = ` <a href="whatsapp://send?text=${contentInputValue}" target="_blank" rel="nofollow noopener">${previewInputBox}/a>`;
        }
        document.getElementById("printWhatsAppHtmlCode").value = whatsApp;
        document.getElementById("printWhatsAppPreview").innerHTML = preview;
        printWhatsAppHtmlCode.oninput = function () {
            printWhatsAppPreview.innerHTML = printWhatsAppHtmlCode.value;
        }

        if (isLocalKeepOpen != true) {
            let showWhatsAppHtmlInputBox = document.getElementById("showWhatsAppHtmlCode");
            if (showWhatsAppHtmlInputBox.className == "block is-hidden") {
                showWhatsAppHtmlInputBox.className = "block";
            } else {
                showWhatsAppHtmlInputBox.className = "block is-hidden";
            }
        }
    }
}
function createBufferHtmlCode(isLocalKeepOpen) {
    let facebook;
    let preview;
    let contentInputValue;
    if (isLocalKeepOpen == false) {
        contentInputValue = document.getElementById("contentInputValue").value;
        let bufferOpenLink = document.getElementById("bufferOpenLink");
        bufferOpenLink.href = `https://buffer.com/add?text=&url=${contentInputValue}`;
    }
    else {
        contentInputValue = document.getElementById("contentInputValue").value;
        let previewInputBox = document.getElementById("previewInputBox").value;
        if (previewInputBox.length == 0) {
            preview = `<a href="https://buffer.com/add?text=&url=${contentInputValue}" target="_blank" rel="nofollow noopener">Share on Buffer</a>`;
            facebook = `<a href="https://buffer.com/add?text=&url=${contentInputValue}" target="_blank" rel="nofollow noopener">Share on Buffer</a>`;
        }
        else {
            facebook = ` <a href="https://buffer.com/add?text=&url= ${contentInputValue}" target="_blank" rel="nofollow noopener">${previewInputBox}</a>`;
            preview = ` <a href="https://buffer.com/add?text=&url=${contentInputValue}" target="_blank" rel="nofollow noopener">${previewInputBox}</a>`;
        }
        document.getElementById("printBufferHtmlCode").value = facebook;
        document.getElementById("printBufferPreview").innerHTML = preview;
        printBufferHtmlCode.oninput = function () {
            printBufferPreview.innerHTML = printBufferHtmlCode.value;
        }

        if (isLocalKeepOpen != true) {
            let showBufferHtmlInputBox = document.getElementById("showBufferHtmlCode");
            if (showBufferHtmlInputBox.className == "block is-hidden") {
                showBufferHtmlInputBox.className = "block";
            } else {
                showBufferHtmlInputBox.className = "block is-hidden";
            }
        }
    }
}
function createDiggHtmlCode(isLocalKeepOpen) {
    let facebook;
    let preview;
    let contentInputValue;
    if (isLocalKeepOpen == false) {
        contentInputValue = document.getElementById("contentInputValue").value;
        let diggOpenLink = document.getElementById("diggOpenLink");
        diggOpenLink.href = `https://digg.com/submit?url=${contentInputValue}&title=`;
    }
    else {
        contentInputValue = document.getElementById("contentInputValue").value;
        let previewInputBox = document.getElementById("previewInputBox").value;
        if (previewInputBox.length == 0) {
            preview = `<a href="https://digg.com/submit?url=${contentInputValue}&title=" target="_blank" rel="nofollow noopener">Share on Digg</a>`;
            facebook = `<a href="https://digg.com/submit?url=${contentInputValue}&title=" target="_blank" rel="nofollow noopener">Share on Digg</a>`;
        }
        else {
            facebook = `<a href="https://digg.com/submit?url=${contentInputValue}&title=" target="_blank" rel="nofollow noopener">${previewInputBox}</a>`;
            preview = `<a href="https://digg.com/submit?url=${contentInputValue}&title=" target="_blank" rel="nofollow noopener">${previewInputBox}</a>`;
        }
        document.getElementById("printDiggHtmlCode").value = facebook;
        document.getElementById("printDiggPreview").innerHTML = preview;
        printDiggHtmlCode.oninput = function () {
            printDiggPreview.innerHTML = printDiggHtmlCode.value;
        }


        if (isLocalKeepOpen != true) {
            let showDiggHtmlInputBox = document.getElementById("showDiggHtmlCode");
            if (showDiggHtmlInputBox.className == "block is-hidden") {
                showDiggHtmlInputBox.className = "block";
            } else {
                showDiggHtmlInputBox.className = "block is-hidden";
            }
        }
    }
}
function createTumblrHtmlCode(isLocalKeepOpen) {
    let facebook;
    let preview;
    let contentInputValue;
    if (isLocalKeepOpen == false) {
        contentInputValue = document.getElementById("contentInputValue").value;
        let tumblrOpenLink = document.getElementById("tumblrOpenLink");
        tumblrOpenLink.href = `http://www.tumblr.com/share?v=3&u=${contentInputValue}&t=`;
    }
    else {
        contentInputValue = document.getElementById("contentInputValue").value;
        let previewInputBox = document.getElementById("previewInputBox").value;
        if (previewInputBox.length == 0) {
            preview = `<a target="_blank"  href="https://www.tumblr.com/widgets/share/tool?canonicalUrl=${contentInputValue}&title=&caption=" target="_blank" rel="nofollow noopener">Share on Tumblr</a>`;
            facebook = `<a target="_blank" href="https://www.tumblr.com/widgets/share/tool?canonicalUrl=${contentInputValue}&title=&caption=" target="_blank" rel="nofollow noopener">Share on Tumblr</a>`;
        }
        else {
            facebook = `<a target="_blank" href="https://www.tumblr.com/widgets/share/tool?canonicalUrl=${contentInputValue}&title=&caption=" target="_blank" rel="nofollow noopener">${previewInputBox}</a>`;
            preview = `<a target="_blank" href="https://www.tumblr.com/widgets/share/tool?canonicalUrl=${contentInputValue}&title=&caption=" target="_blank" rel="nofollow noopener">${previewInputBox}</a>`;
        }

        document.getElementById("printTumblrHtmlCode").value = facebook;
        document.getElementById("printTumblrPreview").innerHTML = preview;
        printTumblrHtmlCode.oninput = function () {
            printTumblrPreview.innerHTML = printTumblrHtmlCode.value;
        }

        if (isLocalKeepOpen != true) {
            let showTumblrHtmlInputBox = document.getElementById("showTumblrHtmlCode");
            if (showTumblrHtmlInputBox.className == "block is-hidden") {
                showTumblrHtmlInputBox.className = "block";
            } else {
                showTumblrHtmlInputBox.className = "block is-hidden";
            }
        }
    }
}
function createRedditHtmlCode(isLocalKeepOpen) {
    let facebook;
    let preview;
    let contentInputValue;
    if (isLocalKeepOpen == false) {
        contentInputValue = document.getElementById("contentInputValue").value;
        let redditOpenLink = document.getElementById("redditOpenLink");
        redditOpenLink.href = `https://reddit.com/submit?url=${contentInputValue}&title=`;
    }
    else {
        contentInputValue = document.getElementById("contentInputValue").value;
        let previewInputBox = document.getElementById("previewInputBox").value;
        if (previewInputBox.length == 0) {
            preview = `<a href="https://reddit.com/submit?url=${contentInputValue}&title=" target="_blank" rel="nofollow noopener">Share on Reddit</a>`;
            facebook = `<a href="https://reddit.com/submit?url=${contentInputValue}&title=" target="_blank" rel="nofollow noopener">Share on Reddit</a>`;
        }
        else {
            facebook = `<a href="https://reddit.com/submit?url=${contentInputValue}&title=" target="_blank" rel="nofollow noopener">${previewInputBox}</a>`;
            preview = `<a href="https://reddit.com/submit?url=${contentInputValue}&title=" target="_blank" rel="nofollow noopener">${previewInputBox}</a>`;
        }
        document.getElementById("printRedditHtmlCode").value = facebook;
        document.getElementById("printRedditPreview").innerHTML = preview;
        printRedditHtmlCode.oninput = function () {
            printRedditPreview.innerHTML = printRedditHtmlCode.value;
        }


        if (isLocalKeepOpen != true) {
            let showRedditHtmlInputBox = document.getElementById("showRedditHtmlCode");
            if (showRedditHtmlInputBox.className == "block is-hidden") {
                showRedditHtmlInputBox.className = "block";
            } else {
                showRedditHtmlInputBox.className = "block is-hidden";
            }
        }
    }
}
function createStumbleuponHtmlCode(isLocalKeepOpen) {
    let facebook;
    let preview;
    let contentInputValue;
    if (isLocalKeepOpen == false) {
        contentInputValue = document.getElementById("contentInputValue").value;
        let stumbleuponOpenLink = document.getElementById("stumbleuponOpenLink");
        stumbleuponOpenLink.href = `https://www.stumbleupon.com/submit?url=${contentInputValue}&title=`;
    }
    else {
        contentInputValue = document.getElementById("contentInputValue").value;
        let previewInputBox = document.getElementById("previewInputBox").value;
        if (previewInputBox.length == 0) {
            preview = `<a href="https://www.stumbleupon.com/submit?url=${contentInputValue}&title=" target="_blank" rel="nofollow noopener">Share on StumbleUpon</a>`;
            facebook = `<a href="https://www.stumbleupon.com/submit?url=${contentInputValue}&title=" target="_blank" rel="nofollow noopener">Share on StumbleUpon</a>`;
        }
        else {
            facebook = `<a href="https://www.stumbleupon.com/submit?url=${contentInputValue}&title=" target="_blank" rel="nofollow noopener">${previewInputBox}</a>`;
            preview = `<a href="https://www.stumbleupon.com/submit?url=${contentInputValue}&title=" target="_blank" rel="nofollow noopener">${previewInputBox}</a>`;
        }
        document.getElementById("printStumbleuponHtmlCode").value = facebook;
        document.getElementById("printStumbleuponPreview").innerHTML = preview;
        printStumbleuponHtmlCode.oninput = function () {
            printStumbleuponPreview.innerHTML = printStumbleuponHtmlCode.value;
        }

        if (isLocalKeepOpen != true) {
            let showStumbleuponHtmlInputBox = document.getElementById("showStumbleuponHtmlCode");
            if (showStumbleuponHtmlInputBox.className == "block is-hidden") {
                showStumbleuponHtmlInputBox.className = "block";
            } else {
                showStumbleuponHtmlInputBox.className = "block is-hidden";
            }
        }
    }
}
function createDeliciousHtmlCode(isLocalKeepOpen) {

    let delicious;
    let preview;
    let contentInputValue;
    if (isLocalKeepOpen == false) {
        contentInputValue = document.getElementById("contentInputValue").value;
        let deliciousOpenLink = document.getElementById("deliciousOpenLink");
        deliciousOpenLink.href = `https://delicious.com/save?v=5&provider=%7Bprovider%7D&noui&jump=close&url=${contentInputValue}&title=`;
    }
    else {
        let previewInputBox = document.getElementById("previewInputBox").value;
        if (previewInputBox.length == 0) {
            preview = `<a href="https://delicious.com/save?v=5&provider=%7Bprovider%7D&noui&jump=close&url=${contentInputValue}&title=" target="_blank" rel="nofollow noopener">Share on Delicious</a>`;
            delicious = `<a href="https://delicious.com/save?v=5&provider=%7Bprovider%7D&noui&jump=close&url=${contentInputValue}&title=" target="_blank" rel="nofollow noopener">Share on Delicious</a>`;
        }
        else {
            delicious = `<a href="https://delicious.com/save?v=5&provider=%7Bprovider%7D&noui&jump=close&url=${contentInputValue}&title=" target="_blank" rel="nofollow noopener">${previewInputBox}</a>`;
            preview = `<a href="https://delicious.com/save?v=5&provider=%7Bprovider%7D&noui&jump=close&url=${contentInputValue}&title=" target="_blank" rel="nofollow noopener">${previewInputBox}</a>`;
        }
        document.getElementById("printDeliciousHtmlCode").value = delicious;
        document.getElementById("printDeliciousPreview").innerHTML = preview;
        printDeliciousHtmlCode.oninput = function () {
            printDeliciousPreview.innerHTML = printDeliciousHtmlCode.value;
        }

        if (isLocalKeepOpen != true) {
            let showDeliciousHtmlInputBox = document.getElementById("showDeliciousHtmlCode");
            if (showDeliciousHtmlInputBox.className == "block is-hidden") {
                showDeliciousHtmlInputBox.className = "block";
            } else {
                showDeliciousHtmlInputBox.className = "block is-hidden";
            }
        }
    }
}
function createEmailHtmlCode(isLocalKeepOpen) {
    let email;
    let preview;
    let contentInputValue;
    let emailSubjectInputValue = document.getElementById("emailSubjectInputValue").value;
    let emailCcInputValue = document.getElementById("emailCcInputValue").value;
    let emailBccInputValue = document.getElementById("emailBccInputValue").value;
    let emailBodyInputValue = document.getElementById("emailBodyInputValue").value;
    if (isLocalKeepOpen == false) {
        contentInputValue = document.getElementById("contentInputValue").value;
        let emailOpenLink = document.getElementById("emailOpenLink");
        emailOpenLink.href = `mailto:${contentInputValue}?subject=${emailSubjectInputValue}&cc=${emailCcInputValue}&bcc=${emailBccInputValue}&body=${emailBodyInputValue}`;
    }
    else {
        if (isLocalKeepOpen != true || isLocalKeepOpen == 36) {

            let showEmailHtmlInputBox = document.getElementById("showEmailHtmlCode");
            if (showEmailHtmlInputBox.className == "block is-hidden") {
                showEmailHtmlInputBox.className = "block";
            }
            else {
                showEmailHtmlInputBox.className = "block is-hidden";
            }
        }
    }
    if (isLocalKeepOpen == 9 || isLocalKeepOpen == 9) {
        let hidePreviewCodeDiv = document.getElementById("previewCodeDiv");
        if (hidePreviewCodeDiv.className == "block") {
            hidePreviewCodeDiv.className = "block is-hidden";
        }
        let emailOptions = document.getElementById("emailOptions");
        if (emailOptions.className == "block is-hidden") {
            emailOptions.className = "block";
        }
    }

    let emailSubjectAnswer = `subject=${emailSubjectInputValue}`;
    let emailCcAnswer = `&cc=${emailCcInputValue}`;
    let emailBccAnswer = `&bcc=${emailBccInputValue}`;
    let emailBodyAnswer = `&body=${emailBodyInputValue}`;



    // let email;
    preview;
    contentInputValue = document.getElementById("contentInputValue").value;
    email = `<a href="mailto:${contentInputValue}?" ${emailSubjectAnswer} ${emailCcAnswer} ${emailBccAnswer} ${emailBodyAnswer}>Send Email</a>`;
    preview = `<a href="mailto:${contentInputValue}?">Send Email</a>`;
    document.getElementById("printEmailHtmlCode").value = email;
    document.getElementById("printEmailPreview").innerHTML = preview;

    printEmailHtmlCode.oninput = function () {
        printEmailPreview.innerHTML = printEmailHtmlCode.value;
    }
}

function showPreviewInputBox() {
    createFacebookHtmlCode(true);
    // createFacebookDialogHtmlCode(true);
    createTwitterHtmlCode(true);
    createPinterestHtmlCode(true);
    createLinkedInHtmlCode(true);
    createWhatsAppHtmlCode(true);
    createBufferHtmlCode(true);
    createDiggHtmlCode(true);
    createTumblrHtmlCode(true);
    createRedditHtmlCode(true);
    createStumbleuponHtmlCode(true);
    createDeliciousHtmlCode(true);
    // createEmailHtmlCode(true);
}

function hideEmailOptions() {
    let hidePreviewCodeDiv = document.getElementById("previewCodeDiv");
    if (hidePreviewCodeDiv.className == "block is-hidden") {
        hidePreviewCodeDiv.className = "block";
    }
    let emailOptions = document.getElementById("emailOptions");
    if (emailOptions.className == "block") {
        emailOptions.className = "block is-hidden";
    }
}