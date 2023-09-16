var rangeSlider = function(){
    var slider =  $('.range-slider'),
        range = $('.form-range');
      
    slider.each(function(){
      range.on('input', function(){
        var range__input = $(this).data('key');
        $('#'+range__input).html(this.value);
        updateCanvas();
      });
    });
  };
  
  rangeSlider();
  
  function updateCanvas() {
  
      var x1 = document.getElementById('cX1').textContent;
      var y1 = document.getElementById('cY1').textContent;
      var x2 = document.getElementById('cX2').textContent;
      var y2 = document.getElementById('cY2').textContent;
      
      if (x1 < 0) { x1 = 0; document.getElementById('cX1').textContent = 0; updateCanvas() }
      if (x1 > 1) { x1 = 1; document.getElementById('cX1').textContent = 1; updateCanvas() }
      if (x2 < 0) { x2 = 0; document.getElementById('cX2').textContent = 0; updateCanvas() }
      if (x2 > 1) { x2 = 1; document.getElementById('cX2').textContent = 1; updateCanvas() }
  
      drawBezierCurve(x1, y1, x2, y2);
      
      var codeCSS;
      var sliderSpeed = document.getElementById('speed').textContent;
      codeCSS = "-webkit-transition: all " + sliderSpeed + "s cubic-bezier(" + x1 + ", " + y1 + ", " + x2 + ", " + y2 + ");\n";
      codeCSS += "transition: all " + sliderSpeed + "s cubic-bezier(" + x1 + ", " + y1 + ", " + x2 + ", " + y2 + ");";
      document.getElementById('code').textContent = codeCSS;
      
  }
var scaling;
var dragSM = 0;
const radius = 7;
const rulers = 30.5;
const margin = 10.5;
const basic_scale_size = 5;
var scaling;
var dragSM = 0;
function initCanvas() {
  var canvas = document.getElementById('bezier');
  if (window.location.hash) {
    var hash = window.location.hash.substring(1).split(',');
    document.getElementById('cX1').textContent = hash[0].trim();
    document.getElementById('cY1').textContent = hash[1].trim();
    document.getElementById('cX2').textContent = hash[2].trim();
    document.getElementById('cY2').textContent = hash[3].trim();
  }
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    scaling = Math.min(canvas.height - rulers - margin, canvas.width - rulers - margin);

   
    canvas.width = canvas.width * 4;
    canvas.height = canvas.height * 4;
    ctx.scale(4, 4);

    canvas.onmousedown = mouseDown;
    canvas.onmouseup = mouseUp;
  } else {
    alert('Please update your browser to use this generator!');
  }
}
  function cX(x) {
      return x * scaling + rulers;
  }
  
  function reverseX(x) {
      return (x - rulers) / scaling;
  }
  
  function lX(x) {
      var result = cX(x);
      return Math.round(result) == result ? result + 0.5 : result;
  }
  
  function cY(y) {
  
      return (1 - y) * scaling + margin;
  }
  
  function reverseY(y) {
      return (margin - y) / scaling + 1;
  }
  
  function lY(y) {
      var result = cY(y);
      return Math.round(result) == result ? result + 0.5 : result;
  }
  
  function drawBezierCurve(x1, y1, x2, y2) {
   
      var canvas = document.getElementById('bezier');
   
      if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.beginPath();
          ctx.strokeStyle = "black";
          ctx.lineWidth = 1;
          ctx.moveTo(cX(0), cY(0));
          ctx.lineTo(cX(1), cY(0));
          ctx.textAlign = "right";
          ctx.fillStyle = "black";
          for (var i = 0.1; i <= 1; i = i + 0.1) {
              ctx.moveTo(-basic_scale_size + cX(0), lY(i));
              if ((i == 0.5) || (i > 0.9)) {
                  ctx.moveTo(-2 * basic_scale_size + cX(0), lY(i));
                  ctx.fillText(Math.round(i * 10) / 10, -3 * basic_scale_size + cX(0), cY(i) + 4);
              }
              ctx.lineTo(cX(0), lY(i));
          }
          ctx.stroke();
          ctx.closePath();
          ctx.beginPath();
  
        
          ctx.save();
          ctx.rotate(-Math.PI / 2);
          ctx.textAlign = "left";
          ctx.fillStyle = "black";
          ctx.fillText("Transition", -cY(0), -3 * basic_scale_size + cX(0));
          ctx.restore();
  
          
          ctx.moveTo(cX(0), cY(0));
          ctx.lineTo(cX(0), cY(1));
          ctx.textAlign = "center";
          for (i = 0.1; i <= 1; i = i + 0.1) {
              ctx.moveTo(lX(i), basic_scale_size + cY(0));
              if ((i == 0.5) || (i > 0.9)) {
                  ctx.moveTo(lX(i), 2 * basic_scale_size + cY(0));
                  ctx.fillText(Math.round(i * 10) / 10, cX(i), 4 * basic_scale_size + cY(0));
              }
              ctx.lineTo(lX(i), cY(0));
          }
  
        
          ctx.textAlign = "left";
          ctx.fillText("Duration", cX(0), 4 * basic_scale_size + cY(0));
          ctx.stroke();
          ctx.closePath();
  
         
          ctx.beginPath();
          ctx.moveTo(cX(0), cY(0));
          ctx.strokeStyle = 'blue';
          ctx.lineWidth = 1;
          ctx.bezierCurveTo(cX(x1), cY(y1), cX(x2), cY(y2), cX(1), cY(1));
          ctx.stroke();
          ctx.closePath();
  
          
          ctx.beginPath();
          ctx.moveTo(cX(1), cY(1));
          ctx.strokeStyle = 'lightgrey';
          ctx.lineWidth = 1;
          ctx.lineTo(cX(0), cY(1));
          ctx.moveTo(cX(1), cY(1));
          ctx.lineTo(cX(1), cY(0));
          ctx.stroke();
          ctx.closePath();
  
          ctx.beginPath();
          ctx.strokeStyle = "black";
          ctx.fillStyle = "black";
          ctx.lineWidth = 1;
          ctx.arc(cX(1), cY(1), 4, 0, 2 * Math.PI);
          ctx.fill();
          ctx.stroke();
          ctx.closePath();
          
          
          ctx.beginPath();
          ctx.strokeStyle = 'black';
          ctx.fillStyle = 'black';
          ctx.arc(cX(0), cY(0), 4, 0, 2 * Math.PI);
          ctx.fill();
          ctx.stroke();
          ctx.closePath();		
  
     
          ctx.beginPath();
          ctx.strokeStyle = 'red';
          ctx.fillStyle = 'red';
          ctx.lineWidth = 2;
          ctx.moveTo(cX(x1), cY(y1));
          ctx.lineTo(cX(0), cY(0));
          ctx.stroke();
          ctx.closePath();
          ctx.beginPath();
          ctx.moveTo(cX(x1), cY(y1));
          ctx.arc(cX(x1), cY(y1), radius, 0, 2 * Math.PI);
          ctx.stroke();
          ctx.fill();
          ctx.closePath();
          ctx.beginPath();
          ctx.strokeStyle = 'red';
          ctx.fillStyle = 'red';
          ctx.lineWidth = 2;
          ctx.moveTo(cX(x2), cY(y2));
          ctx.lineTo(cX(1), cY(1));
          ctx.stroke();
          ctx.closePath();
  
          ctx.beginPath();
          ctx.moveTo(cX(x2), cY(y2));
          ctx.arc(cX(x2), cY(y2), radius, 0, 2 * Math.PI);
          ctx.stroke();
          ctx.fill();
          ctx.closePath();
  
  
      } else {
          alert('You need Safari or Firefox 1.5+ to see this demo.');
      }
  }
  
  function mouseDown(e) {
  
      var canvas = document.getElementById('bezier');
  
      var x1 = cX(document.getElementById('cX1').textContent);
      var y1 = cY(document.getElementById('cY1').textContent);
  
      var rect = canvas.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
  
  
      if ((x1 + radius >= x) && (x1 - radius <= x) && (y1 + radius >= y) && (y1 - radius <= y)) {
          dragSM = 1;
      }
  
      var x2 = cX(document.getElementById('cX2').textContent);
      var y2 = cY(document.getElementById('cY2').textContent);
  
      if ((x2 + radius >= x) && (x2 - radius <= x) && (y2 + radius >= y) && (y2 - radius <= y)) {
          dragSM = 2;
      }
  
     
      if (dragSM != 0) {
          canvas.onmousemove = mouseMove;
      }
  }
  
  function mouseUp(e) {
      var canvas = document.getElementById('bezier');
      dragSM = 0;
      canvas.onmousemove = null;
  }
  
  function mouseMove(e) {
      if (dragSM != 0) {
          var canvas = document.getElementById('bezier');
  
      var rect = canvas.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
  
          if (dragSM == 1) {
              var cX1 = document.getElementById('cX1');
              var cY1 = document.getElementById('cY1');
              cX1.textContent = reverseX(x);
              cX1.textContent = Math.round(cX1.textContent * 100) / 100;
              cY1.textContent = reverseY(y);
              cY1.textContent = Math.round(cY1.textContent * 100) / 100;
              if (cX1.textContent < 0) { cX1.textContent = 0; }
              if (cX1.textContent > 1) { cX1.textContent = 1; }
          } else if (dragSM == 2) {
              var cX2 = document.getElementById('cX2');
              var cY2 = document.getElementById('cY2');
              cX2.textContent = reverseX(x);
              cX2.textContent = Math.round(cX2.textContent * 100) / 100;
              cY2.textContent = reverseY(y);
              cY2.textContent = Math.round(cY2.textContent * 100) / 100;
              if (cX2.textContent < 0) { cX2.textContent = 0; }
              if (cX2.textContent > 1) { cX2.textContent = 1; }
          }
          updateCanvas();
      }
  }
  
  initCanvas();
  updateCanvas();

  
  
  
  
  $(function() {
  
      $(".c-b-function").click(function(e) {
          e.preventDefault();
          var vals = $(this).attr("data-easing").split(",");
          $("#cX1").text(vals[0]);
          $("#cY1").text(vals[1]);
          $("#cX2").text(vals[2]);
          $("#cY2").text(vals[3]);
          
          updateCanvas();
      });
      
      
      $('.editable').on('input', (e) => {
          updateCanvas();			
      });
      
                  
      $("#animateBox").click(function(e){
          e.preventDefault();
          
          var animType = $("input[name=animation-type]:checked").val()
  
          var x1 = $("#cX1").text();
          var y1 = $("#cY1").text();
          var x2 = $("#cX2").text();
          var y2 = $("#cY2").text();
          var speed = $("#speed").text();
          
          $(".custom").css({
              "-webkit-transition": "all " + speed + "s cubic-bezier(" + x1 + "," + y1 + "," + x2 + "," + y2 + ")",
              "transition": "all " + speed + "s cubic-bezier(" + x1 + "," + y1 + "," + x2 + "," + y2 + ")"
          });
  
          $(".linear").css({
              "-webkit-transition": "all " + speed + "s linear",
              "transition": "all " + speed + "s linear"
          });		
  
          $(".ease-in").css({
              "-webkit-transition": "all " + speed + "s ease-in",
              "transition": "all " + speed + "s ease-in"
          });	
  
          $(".ease-out").css({
              "-webkit-transition": "all " + speed + "s ease-out",
              "transition": "all " + speed + "s ease-out"
          });	
  
          $(".ease-in-out").css({
              "-webkit-transition": "all " + speed + "s ease-in-out",
              "transition": "all " + speed + "s ease-in-out"
          });			
          
          var $body = $("body");
          
          if (animType == 1 ) {
              $body.addClass("moveBox");
              setTimeout(function() {
                  $body.removeClass("moveBox");
              }, ((speed * 1000) + 1000));
          }else if (animType == 2 ) {
              $body.addClass("moveBoxWidth");
              setTimeout(function() {
                  $body.removeClass("moveBoxWidth");
              }, ((speed * 1000) + 1000));			
          }else{
              $body.addClass("moveBoxOpacity");
              setTimeout(function() {
                  $body.removeClass("moveBoxOpacity");
              }, ((speed * 1000) + 1000));			
          }
  
      });
  });
  const copyButton = document.querySelector('.copy-button');
const codeElement = document.querySelector('#code');

copyButton.addEventListener('click', () => {

  const range = document.createRange();
  range.selectNode(codeElement);
  
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  

  document.execCommand('copy');
  
  // Clear the selection
  window.getSelection().removeAllRanges();

  copyButton.textContent = 'Copied!';
  setTimeout(() => {
    copyButton.textContent = 'Copy';
  }, 2000);
});