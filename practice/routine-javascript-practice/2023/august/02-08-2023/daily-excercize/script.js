var player;
var isSeeking = false;
var startTime = 0;
var endTime = 0;
var started = false;
var duration = 0;

const linkList = document.getElementById('link-list');
const popular = document.getElementById('popular');


function displayLinks(links) {
  linkList.innerHTML = '';

  links.forEach((linkItem) => {
    const { link, thumbnail, title } = linkItem;

    const linkWrapper = document.createElement('div');
    linkWrapper.classList.add('link-item');

    const thumbnailImage = document.createElement('img');
    thumbnailImage.classList.add('thumbnail-item')
    thumbnailImage.src = thumbnail;
    thumbnailImage.alt = 'Thumbnail';
    thumbnailImage.setAttribute('data-link', link);

    const titles = document.createElement('p');
    titles.setAttribute('data-link', link);
    titles.classList.add('head')
    titles.innerHTML = title

    linkWrapper.appendChild(thumbnailImage);
    linkWrapper.appendChild(titles);
    linkList.appendChild(linkWrapper);
  });
  }

  function getThumbnailUrl(videoId) {
    return `https://img.youtube.com/vi/${videoId}/default.jpg`;
  }
  async function getTitle(videoId) {
    try {
      const response = await fetch(`https://www.youtube.com/oembed?url=http%3A//youtube.com/watch?v=${videoId}&format=json`);
      const data = await response.json();
      return data.title;
    } catch (error) {
      console.log('Error:', error);
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    var clickedLink = e.target.getAttribute('data-link');
    if(clickedLink==null) clickedLink = e.target.childNodes[1].getAttribute('data-link')
    document.getElementById('video-link').value = clickedLink;
    embedVideo();
  };


  linkList.addEventListener('click', handleClick);
  popular.addEventListener('click', handleClick);

  let storedLinks = localStorage.getItem('youtubeLinks');
  storedLinks = storedLinks ? JSON.parse(storedLinks) : [];
  displayLinks(storedLinks);

async function embedVideo() {
  var videoLink = document.getElementById('video-link').value;
  var videoId = extractVideoId(videoLink);

  var embedUrl = "https://www.youtube.com/embed/" + videoId + "?enablejsapi=1&start=" + startTime + "&end=" + endTime + "&loop=1" + "&autoplay=1" + "&playlist="+videoId;

  var playerContainer = document.getElementById('player-container');
  playerContainer.innerHTML = '<iframe id="player" width="560" height="315" style="border-radius:10px;" src="' + embedUrl + '" frameborder="0";encrypted-media; gyroscope;  allowfullscreen></iframe>';
  document.getElementById('holder').style.display = "none";

  var playerIframe = document.getElementById('player');
  player = new YT.Player(playerIframe, {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
  });

  const link = videoLink;

    if (link.trim() !== '') {

      var head = "";
      await getTitle(videoId).then(title => {
           head = title;
        })

       const videoDetails = {
        link: link,
        thumbnail: getThumbnailUrl(videoId),
        title: head
      };
      let links = localStorage.getItem('youtubeLinks');
      links = links ? JSON.parse(links) : [];

      links.unshift(videoDetails);

      if (links.length > 3) {
        links = links.slice(0, 3);
      }

      localStorage.setItem('youtubeLinks', JSON.stringify(links));
      displayLinks(links);
    }

}

function extractVideoId(videoLink) {
  var videoId = "";
  var match = videoLink.match(/youtube\.com.*(\?v=|\/embed\/|\/\d\/|\/vi\/|v\/|\/u\/\w\/|\/embed\/|embed\/)([^#\&\?]*).*/i);
  if (match && match[2].length == 11) {
    videoId = match[2];
  } else {
    console.error("Invalid YouTube video link");
  }
  return videoId;
}

function onPlayerReady(event) {
  player = event.target;
  duration = player.getDuration();
  startTime = 0;
  endTime = duration;

  let min = Math.floor(sliderTwo.value*player.getDuration()/60000);
  let sec = Math.floor(((sliderTwo.value*duration/1000)-(min*60)));
  displayValTwo.textContent = min+`:`+sec;
  displayValOne.textContent='0:0';
  sliderOne.value = 0;
  sliderTwo.value = 1000;
  fillColor()
  document.getElementById('pause').innerHTML = "| |";

}
window.onload = function(){
  slideOne();
  slideTwo();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne(){
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
      sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  let min = Math.floor(sliderOne.value*duration/60000);
  let sec = Math.floor(((sliderOne.value*duration/1000)-(min*60)));
  displayValOne.textContent = min+`:`+sec;
  fillColor();
}
function slideTwo(){
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
      sliderTwo.value = parseInt(sliderTwo.value) + minGap;
  }
  let min = Math.floor(sliderTwo.value*duration/60000);
  let sec = Math.floor(((sliderTwo.value*duration/1000)-(min*60)));
  displayValTwo.textContent = min+`:`+sec;
  fillColor();
}
function fillColor(){
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #686565 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #686565 ${percent2}%)`;
}


document.getElementById('slider-1').addEventListener('change',()=>{
  if(sliderOne.value/1000*player.getDuration()>player.getCurrentTime())player.seekTo(sliderOne.value/1000*player.getDuration());
  endTime = sliderTwo.value/1000*player.getDuration();
  started = true;
  
})

document.getElementById('slider-2').addEventListener('change',()=>{
  endTime = sliderTwo.value/1000*player.getDuration();
  started = true;
})

setInterval(check,100);
function check() {
  if(started){
  if(endTime<=player.getCurrentTime()){
    player.seekTo(sliderOne.value/1000*player.getDuration());
  }
}
}


function onPlayerStateChange(event) {
  started = true;
  if (event.data == YT.PlayerState.PLAYING) {
    var currentTime = player.getCurrentTime();
    if (currentTime >= endTime) {
      player.seekTo(sliderOne.value/1000*player.getDuration());
    }
  }

}





var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var currentState = false;
document.getElementById('pause').addEventListener('click',()=>{
  currentState = !currentState;
  if(currentState){
    player.pauseVideo();
    document.getElementById('pause').innerHTML = "▶";

  }
  else{player.playVideo();
    document.getElementById('pause').innerHTML = "| |";

  }
})
document.getElementById('stop').addEventListener('click',()=>{
  player.stopVideo();
  sliderOne.value = 0;
  sliderTwo.value = 1000;
  displayValOne.innerText = "0:0";
  let min = Math.floor(sliderTwo.value*player.getDuration()/60000);
  let sec = Math.floor(((sliderTwo.value*duration/1000)-(min*60)));
  displayValTwo.textContent = min+`:`+sec; 
  fillColor();
})
document.getElementById('restart').addEventListener('click',()=>{
  player.seekTo(sliderOne.value/1000*player.getDuration());
})


var auto_embed = document.getElementById('auto');

function validLink(videoLink){
  var match = videoLink.match(/youtube\.com.*(\?v=|\/embed\/|\/\d\/|\/vi\/|v\/|\/u\/\w\/|\/embed\/|embed\/)([^#\&\?]*).*/i);
  if (match && match[2].length == 11) {
    return true;
  } else return false;
}

document.getElementById('video-link').addEventListener('keyup', () =>{
    if(auto_embed.checked && validLink(document.getElementById('video-link').value)){
      embedVideo();
    }
})

var sample = document.getElementById('sample').addEventListener('click',()=>{
  document.getElementById('video-link').value = "https://www.youtube.com/watch?v=UwsrzCVZAb8";
  embedVideo();
})

document.addEventListener('DOMContentLoaded', function() {
  getLinkData();

}, false);

function getLinkData(){
  var url = window.location.href;
  var urlParams = new URLSearchParams(url);

  if(url.includes('?')){
    for (let pair of urlParams.entries()) {
      document.getElementById("video-link").value = pair[1];
      embedVideo()
   }
   
      
  }
}
























