var canvas = document.getElementById('c');
var ctx = canvas.getContext('2d');
var img = new Image();


img.addEventListener('load', function() {
    ctx.filter = 'none';
    canvas.width = this.naturalWidth;
    canvas.height = this.naturalHeight;
    ctx.drawImage(img, 0, 0);
    ctx.drawImage(img, 0, 0, this.width,this.height);
    window.URL.revokeObjectURL(this.src);
  }, false);


// var loadfile = function (event) {
//     img.src = URL.createObjectURL(event.target.files[0]);
//     img.onload = function(){
//         img.style.transform = null
//     }   
//  }
 
 const flipH = document.getElementById('flipH')
 const flipV = document.getElementById('flipV')
 
 flipH.addEventListener('click', flipHH)
 flipV.addEventListener('click', flipVV)
function flipHH(e){
console.log(canvas.style)

    if(canvas.style.transform === ''){
        canvas.style.transform = 'scaleY(-1)'
    }else if(canvas.style.transform === 'scaleY(-1)'){
        canvas.style.transform = ''
    }else if(canvas.style.transform === 'scaleX(-1)') {
        canvas.style.transform = 'scale(-1, -1)'
    }else if(canvas.style.transform === 'scale(-1, -1)'){
        canvas.style.transform = 'scaleX(-1)'
    }

}

function flipVV(e){
    if(canvas.style.transform === ''){
        canvas.style.transform = 'scaleX(-1)'
    }else if(canvas.style.transform === 'scaleX(-1)'){
        canvas.style.transform = ''
    }else if(canvas.style.transform === 'scaleY(-1)') {
        canvas.style.transform = 'scale(-1,-1)'
    }else if(canvas.style.transform === 'scale(-1, -1)'){
        canvas.style.transform = 'scaleY(-1)'
    }
}
function handleFiles(files) {
  if (files.length) {
    img.src = window.URL.createObjectURL(files[0]);
  }
}
var download = document.createElement('a');
download.innerHTML = '';
download.addEventListener('click', function(ev) {
  download.href = canvas.toDataURL();
  download.download = 'img.png';
    console.log(canvas.toDataURL())
}, false);
const btn = document.getElementById('button');
btn.appendChild(download)