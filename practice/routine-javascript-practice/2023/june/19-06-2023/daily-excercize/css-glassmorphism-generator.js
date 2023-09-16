let opacity = 0.6;
let blur = 18;
let angle = 45;
let blendMode = 'hard-light';
let colors = {
    white: (o) => [ `rgba(255,255,255,${o})`, `rgba(255,255,255,${o})`, `rgba(0,0,0,0.8)` ],
    black: (o) => [ `rgba(66,60,90,${o})`, `rgba(66,60,90,${o})`, `rgba(255,255,255,1)` ],
    reallyBlack: (o) => [ `rgba(76,52,52,${o})`, `rgba(76,52,52,${o})`, `rgba(255,255,255,1)` ],
    redOrange: (o) => [ `rgba(255,102,65,${o})`, `rgba(228,70,122,${o})`, `rgba(0,0,0,0.8)` ],
    greenBlue: (o) => [ `rgba(32,152,255,${o})`, `rgba(50,249,176,${o})`, `rgba(0,0,0,0.8)` ],
    bluePurple: (o) => [ `rgba(32,152,255,${o})`, `rgba(172,50,249,${o})`, `rgba(0,0,0,0.8)` ]
}

let activeColor = 'black';
const generateCss = () => {
    let css = `
#glass-object {
border-radius: 25px;
backdrop-filter: blur(${blur}px);
padding: 2rem;
box-shadow: 0 2px 10px rgb(0 0 0 / 10%), 0 10px 15px rgb(0 0 0 / 20%);
box-sizing: border-box;
background-image: linear-gradient(${angle}deg, ${colors[activeColor](opacity)[0]}, ${colors[activeColor](opacity)[1]});
width: 100%;
min-height: 70px;
mix-blend-mode: hard-light;
}`
document.getElementById('generated-code').textContent = css;
}
document.querySelectorAll('.color').forEach(function(item) {
  item.addEventListener('click', function(e) {
    let attribute = item.getAttribute('data-color');
    let getColor = colors[attribute](opacity);
    activeColor = attribute;
    
    document.querySelectorAll('.color').forEach(function(item) {
      item.classList.remove('active'); 
    });
    item.classList.add('active');
    
    document.querySelectorAll('.color').forEach(function(item) {
      item.style.boxShadow = '';
    });
    item.style.boxShadow = '0 0 0 3px #191f2b, 0 0 0 4px #1e84ff';
    
    document.getElementById('glass-object').style.backgroundImage = `linear-gradient(${angle}deg, ${getColor[0]}, ${getColor[1]})`
    document.getElementById('text-layer').style.color = getColor[2];
    generateCss();
  });
});

const copyButtons = document.querySelectorAll('.copy-button');

copyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const codeSection = button.parentElement.querySelector('code');
    const code = codeSection.textContent;
    navigator.clipboard.writeText(code).then(() => {
      button.textContent = 'Copied!';
      setTimeout(() => {
        button.textContent = 'Copy';
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy code: ', err);
    });
  });
});

document.querySelector('#glass-opacity input').addEventListener('input', function(e) {
    opacity = this.value;
    let getColor = colors[activeColor](opacity);
    document.getElementById('glass-object').style.backgroundImage = `linear-gradient(${angle}deg, ${getColor[0]}, ${getColor[1]})`
    generateCss();
})

document.querySelector('#glass-blur input').addEventListener('input', function(e) {
    blur = this.value;
    document.getElementById('glass-object').style.backdropFilter = `blur(${blur}px)`;
    generateCss();
})

document.querySelector('#glass-filter-effect select').addEventListener('input', function(e) {
    blendMode = this.value;
    document.getElementById('glass-object').style.mixBlendMode = blendMode;
    generateCss();
})