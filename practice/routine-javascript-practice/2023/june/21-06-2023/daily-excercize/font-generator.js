function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function Showdata() {
    var text = document.getElementById('input').value
    document.getElementById('card0').innerHTML=text
    document.getElementById('card1').innerHTML=text
    document.getElementById('card2').innerHTML=text
    document.getElementById('card3').innerHTML=text
    document.getElementById('card4').innerHTML=text
    document.getElementById('card5').innerHTML=text
    document.getElementById('card6').innerHTML=text
    document.getElementById('card7').innerHTML=text
    document.getElementById('card8').innerHTML=text
    document.getElementById('card9').innerHTML=text
    document.getElementById('card10').innerHTML=text
    document.getElementById('card11').innerHTML=text
    document.getElementById('card12').innerHTML=text
    document.getElementById('card13').innerHTML=text
    document.getElementById('card14').innerHTML=text
    document.getElementById('card15').innerHTML=text
    document.getElementById('card16').innerHTML=text
    document.getElementById('card17').innerHTML=text
    document.getElementById('card18').innerHTML=text
    document.getElementById('card19').innerHTML=text
    document.getElementById('card20').innerHTML=text
    document.getElementById('card21').innerHTML=text
    document.getElementById('card22').innerHTML=text
    document.getElementById('card23').innerHTML=text
    document.getElementById('card24').innerHTML=text
    document.getElementById('instaPostText').innerHTML=text
    document.getElementById('js-twitter').innerHTML = text

    var checkboxes = document.getElementsByName('check')
    var check = Array.from(checkboxes)

    var fonts = document.getElementsByClassName('is-size-5')

    var styledFont = Array.from(fonts)

    for(i=0; i<check.length; i++){
       if(check[i].checked !== false){
        const sf = styledFont[i].outerHTML;
        document.getElementById('js-twitter').innerHTML= sf
        document.getElementById('instaPostText').innerHTML=sf
       }
    } 
}


function Dynamictext(){
    document.getElementById('default').checked = true
    document.getElementById('input').value = "I Drink Till I'M Drunk Smoke Till i high"
}
  
Dynamictext();
Showdata();
