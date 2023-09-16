function displayPlayer() {
  var input = document.getElementById("player_stuff").elements;
  var position = input[0];
  var player_id = input[1];

  document.getElementById("disp_player").innerHTML = position + player_id;
}

/* start dark-mode*/
const toggle = document.getElementById("toggleDark");
const myElement = document.getElementById("myElement");
const desktopViewBody = document.getElementById("desktopViewBody");
const androidView = document.getElementById("androidView");
const Tweet = document.getElementById("Tweet");
const iphoneView = document.getElementById("iphoneView");
const born1 = document.getElementById("born1");
const totalTweet = document.getElementById("totalTweetDiv");
const time = document.getElementById("time");
const following1 = document.getElementById("following1");
const followers1 = document.getElementById("followers1");
const wifiIcon = document.getElementById("wifi");
const signal2 = document.getElementById("signal2");
const battery = document.getElementById("battery");
const battery1 = document.getElementById("battery1");
const ellipsis = document.getElementById("ellipsis");
const percent = document.getElementById("percent");
const time2 = document.getElementById("time2");
const mobileTime = document.getElementById("mobileTime");
const battery2 = document.getElementById("battery2");
const checkIcon = document.getElementById("checkIcon");
const ellipsisH = document.getElementById("ellipsis-h");
const LiveLocation = document.getElementById("LiveLocation");
const signal = document.getElementById("signal");
const urldark = document.getElementById("url");
const Profilebottondark = document.getElementById("Profile-button");
const mapsIcongray = document.getElementById("mapsIcongray");
const mapsIconWhite = document.getElementById("mapsIconWhite");
const mapsIconBlack = document.getElementById("mapsIconBlack");
const linkgrayIcon = document.getElementById("linkgrayIcon");
const linkWhiteIcon = document.getElementById("linkWhiteIcon");
const linkBlackIcon = document.getElementById("linkBlackIcon");
const dategrayIcon = document.getElementById("dategrayIcon");
const dateWhiteIcon = document.getElementById("dateWhiteIcon");
const dateBlackIcon = document.getElementById("dateBlackIcon");
const followingdark = document.getElementById("following");
const followersdark = document.getElementById("followers");
const accountNamedark = document.getElementById("accountName");
const subcribationdark = document.getElementById("subcribation");
const sarvamangaldark = document.getElementById("sarvamangal");
const userNamedark = document.getElementById("userNameDiv");
const totalTweet1 = document.getElementById("totalTweet");
const Tweets = document.getElementById("Tweets");
/*const calendarSvg = document.getElementById("liveIcon");
const urlSvg = document.getElementById("urlicon");*/

toggle.addEventListener("click", function () {
  /*this.classList.toggle("bi-moon");*/
  /*====== icon show ====*/

  dateBlackIcon.style.display = "none";

  if (this.classList.toggle("dark")) {
    Profilebottondark.style.background = "black";
    Profilebottondark.style.color = "white";

    myElement.style.background = "white";
    myElement.style.color = "black";
    myElement.style.transition = "2s";

    desktopViewBody.style.background = "white";
    desktopViewBody.style.color = "black";
    desktopViewBody.style.transition = "2s";

    androidView.style.background = "white";
    androidView.style.color = "black";
    androidView.style.transition = "2s";

    Tweet.style.background = "white";
    Tweet.style.color = "black";
    Tweet.style.transition = "2s";

    iphoneView.style.background = "white";
    iphoneView.style.color = "black";
    iphoneView.style.transition = "2s";

    born1.style.background = "white";
    born1.style.color = "black";
    born1.style.transition = "2s";

    totalTweet.style.background = "white";
    totalTweet.style.color = "rgb(83, 100, 113)";
    totalTweet.style.transition = "2s";

    following1.style.background = "white";
    following1.style.color = "rgb(83, 100, 113)";
    following1.style.transition = "2s";

    followers1.style.background = "white";
    followers1.style.color = "rgb(83, 100, 113)";
    followers1.style.transition = "2s";

    wifiIcon.style.background = "white";
    wifiIcon.style.color = "rgb(83, 100, 113)";
    wifiIcon.style.transition = "2s";

    signal2.style.background = "white";
    signal2.style.color = "rgb(83, 100, 113)";
    signal2.style.transition = "2s";

    battery.style.background = "white";
    battery.style.color = "rgb(83, 100, 113)";
    battery.style.transition = "2s";

    battery1.style.background = "white";
    battery1.style.color = "rgb(83, 100, 113)";
    battery1.style.transition = "2s";

    ellipsis.style.background = "white";
    ellipsis.style.color = "rgb(83, 100, 113)";
    ellipsis.style.transition = "2s";

    percent.style.background = "white";
    percent.style.color = "rgb(83, 100, 113)";
    percent.style.transition = "2s";

    time.style.background = "white";
    time.style.color = "rgb(83, 100, 113)";
    time.style.transition = "2s";

    time2.style.background = "white";
    time2.style.color = "rgb(83, 100, 113)";
    time2.style.transition = "2s";

    mobileTime.style.background = "white";
    mobileTime.style.color = "rgb(83, 100, 113)";
    mobileTime.style.transition = "2s";

    battery2.style.background = "white";
    battery2.style.color = "rgb(83, 100, 113)";
    battery2.style.transition = "2s";

    checkIcon.style.background = "white";
    checkIcon.style.color = "rgb(83, 100, 113)";
    checkIcon.style.transition = "2s";

    ellipsisH.style.background = "white";
    ellipsisH.style.color = "rgb(83, 100, 113)";
    ellipsisH.style.transition = "2s";

    LiveLocation.style.background = "white";
    LiveLocation.style.color = "rgb(83, 100, 113)";
    LiveLocation.style.transition = "2s";

    signal.style.background = "white";
    signal.style.color = "rgb(83, 100, 113)";
    signal.style.transition = "2s";

    urldark.style.background = "white";
    urldark.style.color = "#485fc7";
    urldark.style.transition = "2s";

    followingdark.style.background = "white";
    followingdark.style.color = "black";
    followingdark.style.transition = "2s";

    followersdark.style.background = "white";
    followersdark.style.color = "black";
    followersdark.style.transition = "2s";

    accountNamedark.style.background = "white";
    accountNamedark.style.color = "black";
    accountNamedark.style.transition = "2s";

    subcribationdark.style.background = "white";
    subcribationdark.style.color = "black";
    subcribationdark.style.transition = "2s";

    sarvamangaldark.style.background = "white";
    sarvamangaldark.style.color = "rgb(83, 100, 113)";
    sarvamangaldark.style.transition = "2s";

    userNamedark.style.background = "white";
    userNamedark.style.color = "rgb(83, 100, 113)";
    userNamedark.style.transition = "2s";

    Tweets.style.background = "white";
    Tweets.style.color = "black";
    Tweets.style.transition = "2s";

    totalTweet1.style.background = "white";
    totalTweet1.style.color = "rgb(83, 100, 113)";
    totalTweet1.style.transition = "2s";

    /*calendarSvg.style.background = "white";
    calendarSvg.style.fill = "#4a4a4a";

    urlSvg.style.background = "white";
    urlSvg.style.fill = "#4a4a4a";*/
    mapsIcongray.style.display = "";
    mapsIconWhite.style.display = "none";
    mapsIconBlack.style.display = "none";
    linkgrayIcon.style.display = "";
    linkWhiteIcon.style.display = "none";
    linkBlackIcon.style.display = "none";
    dategrayIcon.style.display = "";
    dateWhiteIcon.style.display = "none";
    dateBlackIcon.style.display = "none";
  } else {
    dateBlackIcon.style.display = "none";
    dateWhiteIcon.style.display = "";
    dategrayIcon.style.display = "none";
    linkBlackIcon.style.display = "none";
    linkWhiteIcon.style.display = "";
    linkgrayIcon.style.display = "none";
    mapsIconWhite.style.display = "";
    mapsIconBlack.style.display = "none";
    mapsIcongray.style.display = "none";
    Profilebottondark.style.background = "white";
    Profilebottondark.style.color = "black";

    Tweets.style.background = "black";
    Tweets.style.color = "white";
    Tweets.style.transition = "2s";

    totalTweet1.style.background = "black";
    totalTweet1.style.color = "white";
    totalTweet1.style.transition = "2s";

    userNamedark.style.background = "black";
    userNamedark.style.color = "white";
    userNamedark.style.transition = "2s";

    sarvamangaldark.style.background = "black";
    sarvamangaldark.style.color = "white";
    sarvamangaldark.style.transition = "2s";

    subcribationdark.style.background = "black";
    subcribationdark.style.color = "white";
    subcribationdark.style.transition = "2s";

    accountNamedark.style.background = "black";
    accountNamedark.style.color = "white";
    accountNamedark.style.transition = "2s";

    followersdark.style.background = "black";
    followersdark.style.color = "white";
    followersdark.style.transition = "2s";

    followingdark.style.background = "black";
    followingdark.style.color = "white";
    followingdark.style.transition = "2s";

    myElement.style.background = "black";
    myElement.style.color = "white";
    myElement.style.transition = "2s";

    wifiIcon.style.background = "black";
    wifiIcon.style.color = "white";
    wifiIcon.style.transition = "2s";

    desktopViewBody.style.background = "black";
    desktopViewBody.style.color = "white";
    desktopViewBody.style.transition = "2s";

    androidView.style.background = "black";
    androidView.style.color = "white";
    androidView.style.transition = "2s";

    Tweet.style.background = "black";
    Tweet.style.color = "white";
    Tweet.style.transition = "2s";

    iphoneView.style.background = "black";
    iphoneView.style.color = "white";
    iphoneView.style.transition = "2s";

    born1.style.background = "black";
    born1.style.color = "white";
    born1.style.transition = "2s";

    totalTweet.style.background = "black";
    totalTweet.style.color = "white";
    totalTweet.style.transition = "2s";

    following1.style.background = "black";
    following1.style.color = "white";
    following1.style.transition = "2s";

    followers1.style.background = "black";
    followers1.style.color = "white";
    followers1.style.transition = "2s";

    signal2.style.background = "black";
    signal2.style.color = "white";
    signal2.style.transition = "2s";

    battery.style.background = "black";
    battery.style.color = "white";
    battery.style.transition = "2s";

    battery1.style.background = "black";
    battery1.style.color = "white";
    battery1.style.transition = "2s";

    ellipsis.style.background = "black";
    ellipsis.style.color = "white";
    ellipsis.style.transition = "2s";

    percent.style.background = "black";
    percent.style.color = "white";
    percent.style.transition = "2s";

    time.style.background = "black";
    time.style.color = "white";
    time.style.transition = "2s";

    time2.style.background = "black";
    time2.style.color = "white";
    time2.style.transition = "2s";

    mobileTime.style.background = "black";
    mobileTime.style.color = "white";
    mobileTime.style.transition = "2s";

    battery2.style.background = "black";
    battery2.style.color = "white";
    battery2.style.transition = "2s";

    checkIcon.style.background = "black";
    checkIcon.style.color = "white";
    checkIcon.style.transition = "2s";

    ellipsisH.style.background = "black";
    ellipsisH.style.color = "white";
    ellipsisH.style.transition = "2s";

    LiveLocation.style.background = "black";
    LiveLocation.style.color = "white";
    LiveLocation.style.transition = "2s";

    signal.style.background = "black";
    signal.style.color = "white";
    signal.style.transition = "2s";

    urldark.style.background = "black";
    urldark.style.color = "white";
    urldark.style.transition = "2s";

    /*calendarSvg.style.background = "black";
    calendarSvg.style.fill = "white";

    urlSvg.style.background = "black";
    urlSvg.style.fill = "white";*/
  }
});
/*end dark-mode*/

/*start blue mode */
const toggle1 = document.getElementById("toggleBlue");
const profileButtonBlue = document.getElementById("Profile-button");
const myElement1 = document.getElementById("myElement");
const desktopViewBody1 = document.getElementById("desktopViewBody");
const androidView1 = document.getElementById("androidView");
const Tweet1 = document.getElementById("Tweet");
const iphoneView1Blue = document.getElementById("iphoneView");
const born1Blue = document.getElementById("born1");
const totalTweetBlue = document.getElementById("totalTweetDiv");
const timeBlue = document.getElementById("time");
const following1Blue = document.getElementById("following1");
const followers1Blue = document.getElementById("followers1");
const wifiBlue = document.getElementById("wifi");
const signalBlue = document.getElementById("signal");
const signal2Blue = document.getElementById("signal2");
const batteryBlue = document.getElementById("battery");
const battery1Blue = document.getElementById("battery1");
const ellipsisBlue = document.getElementById("ellipsis-h");
const percentBlue = document.getElementById("percent");
const time2Blue = document.getElementById("time2");
const mobileTimeBlue = document.getElementById("mobileTime");
const battery2Blue = document.getElementById("battery2");
const checkIconBlue = document.getElementById("checkIcon");
const LiveLocationBlue = document.getElementById("LiveLocation");
const urlBlue = document.getElementById("url");
const ellipsis1Blue = document.getElementById("ellipsis");

const mapsIcongray1 = document.getElementById("mapsIcongray");
const mapsIconWhite1 = document.getElementById("mapsIconWhite");
const mapsIconBlack1 = document.getElementById("mapsIconBlack");
const linkgrayIcon1 = document.getElementById("linkgrayIcon");
const linkWhiteIcon1 = document.getElementById("linkWhiteIcon");
const linkBlackIcon1 = document.getElementById("linkBlackIcon");
const dategrayIcon1 = document.getElementById("dategrayIcon");
const dateWhiteIcon1 = document.getElementById("dateWhiteIcon");
const dateBlackIcon1 = document.getElementById("dateBlackIcon");
const followingBlue = document.getElementById("following");
const followersBlue = document.getElementById("followers");
const accountNameBlue = document.getElementById("accountName");
const subcribationBlue = document.getElementById("subcribation");
const sarvamangalBlue = document.getElementById("sarvamangal");
const userNameBlue = document.getElementById("userNameDiv");
const totalTweetBlue1 = document.getElementById("totalTweet");
const TweetsBlue = document.getElementById("Tweets");

toggle1.addEventListener("click", function () {
  const mapsIcongray = document.getElementById("mapsIcongray");
  mapsIcongray.style.display = "none";

  const mapsIconWhite = document.getElementById("mapsIconWhite");
  mapsIconWhite.style.display = "";

  const mapsIconBlack = document.getElementById("mapsIconBlack");
  mapsIconBlack.style.display = "none";

  const linkgrayIcon = document.getElementById("linkgrayIcon");
  linkgrayIcon.style.display = "none";

  const linkWhiteIcon = document.getElementById("linkWhiteIcon");
  linkWhiteIcon.style.display = "";

  const linkBlackIcon = document.getElementById("linkBlackIcon");
  linkBlackIcon.style.display = "none";

  const dategrayIcon = document.getElementById("dategrayIcon");
  dategrayIcon.style.display = "none";

  const dateWhiteIcon = document.getElementById("dateWhiteIcon");
  dateWhiteIcon.style.display = "";

  const dateBlackIcon = document.getElementById("dateBlackIcon");
  dateBlackIcon.style.display = "none";

  if (this.classList.toggle("Blue")) {
    profileButtonBlue.style.background = "black";
    profileButtonBlue.style.color = "white";

    myElement1.style.background = "white";
    myElement1.style.color = "black";
    myElement1.style.transition = "2s";

    desktopViewBody1.style.background = "white";
    desktopViewBody1.style.color = "rgb(83, 100, 113)";
    desktopViewBody1.style.transition = "2s";

    androidView1.style.background = "white";
    androidView1.style.color = "rgb(83, 100, 113)";
    androidView1.style.transition = "2s";

    Tweet1.style.background = "white";
    Tweet1.style.color = "black";
    Tweet1.style.transition = "2s";

    iphoneView1Blue.style.background = "white";
    iphoneView1Blue.style.color = "rgb(83, 100, 113)";
    iphoneView1Blue.style.transition = "2s";

    born1Blue.style.background = "white";
    born1Blue.style.color = "rgb(83, 100, 113)";
    born1Blue.style.transition = "2s";

    totalTweetBlue.style.background = "white";
    totalTweetBlue.style.color = "rgb(83, 100, 113)";
    totalTweetBlue.style.transition = "2s";

    following1Blue.style.background = "white";
    following1Blue.style.color = "rgb(83, 100, 113)";
    following1Blue.style.transition = "2s";

    followers1Blue.style.background = "white";
    followers1Blue.style.color = "rgb(83, 100, 113)";
    followers1Blue.style.transition = "2s";

    wifiBlue.style.background = "white";
    wifiBlue.style.color = "rgb(83, 100, 113)";
    wifiBlue.style.transition = "2s";

    signalBlue.style.background = "white";
    signalBlue.style.color = "rgb(83, 100, 113)";
    signalBlue.style.transition = "2s";

    signal2Blue.style.background = "white";
    signal2Blue.style.color = "rgb(83, 100, 113)";
    signal2Blue.style.transition = "2s";

    batteryBlue.style.background = "white";
    batteryBlue.style.color = "rgb(83, 100, 113)";
    batteryBlue.style.transition = "2s";

    battery1Blue.style.background = "white";
    battery1Blue.style.color = "rgb(83, 100, 113)";
    battery1Blue.style.transition = "2s";

    ellipsisBlue.style.background = "white";
    ellipsisBlue.style.color = "rgb(83, 100, 113)";
    ellipsisBlue.style.transition = "2s";

    percentBlue.style.background = "white";
    percentBlue.style.color = "rgb(83, 100, 113)";
    percentBlue.style.transition = "2s";

    timeBlue.style.background = "white";
    timeBlue.style.color = "rgb(83, 100, 113)";
    timeBlue.style.transition = "2s";

    time2Blue.style.background = "white";
    time2Blue.style.color = "rgb(83, 100, 113)";
    time2Blue.style.transition = "2s";

    mobileTimeBlue.style.background = "white";
    mobileTimeBlue.style.color = "rgb(83, 100, 113)";
    mobileTimeBlue.style.transition = "2s";

    battery2Blue.style.background = "white";
    battery2Blue.style.color = "rgb(83, 100, 113)";
    battery2Blue.style.transition = "2s";

    checkIconBlue.style.background = "white";
    checkIconBlue.style.color = "rgb(83, 100, 113)";
    checkIconBlue.style.transition = "2s";

    LiveLocationBlue.style.background = "white";
    LiveLocationBlue.style.color = "rgb(83, 100, 113)";
    LiveLocationBlue.style.transition = "2s";

    urlBlue.style.background = "white";
    urlBlue.style.color = "#485fc7";
    urlBlue.style.transition = "2s";

    ellipsis1Blue.style.background = "white";
    ellipsis1Blue.style.color = "rgb(83, 100, 113)";
    ellipsis1Blue.style.transition = "2s";

    followingBlue.style.background = "white";
    followingBlue.style.color = "black";
    followingBlue.style.transition = "2s";

    followersBlue.style.background = "white";
    followersBlue.style.color = "black";
    followersBlue.style.transition = "2s";

    accountNameBlue.style.background = "white";
    accountNameBlue.style.color = "black";
    accountNameBlue.style.transition = "2s";

    subcribationBlue.style.background = "white";
    subcribationBlue.style.color = "black";
    subcribationBlue.style.transition = "2s";

    sarvamangalBlue.style.background = "white";
    sarvamangalBlue.style.color = "rgb(83, 100, 113)";
    sarvamangalBlue.style.transition = "2s";

    userNameBlue.style.background = "white";
    userNameBlue.style.color = "rgb(83, 100, 113)";
    userNameBlue.style.transition = "2s";

    totalTweetBlue1.style.background = "white";
    totalTweetBlue1.style.color = "rgb(83, 100, 113)";
    totalTweetBlue1.style.transition = "2s";

    TweetsBlue.style.background = "white";
    TweetsBlue.style.color = "black";
    TweetsBlue.style.transition = "2s";

    mapsIcongray1.style.display = "";
    mapsIconWhite1.style.display = "none";
    mapsIconBlack1.style.display = "none";
    linkgrayIcon1.style.display = "";
    linkWhiteIcon1.style.display = "none";
    linkBlackIcon1.style.display = "none";
    dategrayIcon1.style.display = "";
    dateWhiteIcon1.style.display = "none";
    dateBlackIcon1.style.display = "none";
  } else {
    dateBlackIcon1.style.display = "none";
    dateWhiteIcon1.style.display = "";
    dategrayIcon1.style.display = "none";
    linkBlackIcon1.style.display = "none";
    linkWhiteIcon1.style.display = "";
    linkgrayIcon1.style.display = "none";
    mapsIconWhite1.style.display = "";
    mapsIconBlack1.style.display = "none";
    mapsIcongray1.style.display = "none";

    TweetsBlue.style.background = "#0000ff";
    TweetsBlue.style.color = "white";
    TweetsBlue.style.transition = "2s";

    totalTweetBlue1.style.background = "#0000ff";
    totalTweetBlue1.style.color = "white";
    totalTweetBlue1.style.transition = "2s";

    userNameBlue.style.background = "#0000ff";
    userNameBlue.style.color = "white";
    userNameBlue.style.transition = "2s";

    sarvamangalBlue.style.background = "#0000ff";
    sarvamangalBlue.style.color = "white";
    sarvamangalBlue.style.transition = "2s";

    subcribationBlue.style.background = "#0000ff";
    subcribationBlue.style.color = "white";
    subcribationBlue.style.transition = "2s";

    accountNameBlue.style.background = "#0000ff";
    accountNameBlue.style.color = "white";
    accountNameBlue.style.transition = "2s";

    followersBlue.style.background = "#0000ff";
    followersBlue.style.color = "white";
    followersBlue.style.transition = "2s";

    followingBlue.style.background = "#0000ff";
    followingBlue.style.color = "white";
    followingBlue.style.transition = "2s";

    profileButtonBlue.style.background = "white";
    profileButtonBlue.style.color = "black";

    myElement1.style.background = "#0000ff";
    myElement1.style.color = "white";
    myElement1.style.transition = "2s";

    desktopViewBody1.style.background = "#0000ff";
    desktopViewBody1.style.color = "white";
    desktopViewBody1.style.transition = "2s";

    androidView1.style.background = "#0000ff";
    androidView1.style.color = "white";
    androidView1.style.transition = "2s";

    Tweet1.style.background = "#0000ff";
    Tweet1.style.color = "white";
    Tweet1.style.transition = "2s";

    iphoneView1Blue.style.background = "#0000ff";
    iphoneView1Blue.style.color = "white";
    iphoneView1Blue.style.transition = "2s";

    born1Blue.style.background = "#0000ff";
    born1Blue.style.color = "white";
    born1Blue.style.transition = "2s";

    totalTweetBlue.style.background = "#0000ff";
    totalTweetBlue.style.color = "white";
    totalTweetBlue.style.transition = "2s";

    following1Blue.style.background = "#0000ff";
    following1Blue.style.color = "white";
    following1Blue.style.transition = "2s";

    followers1Blue.style.background = "#0000ff";
    followers1Blue.style.color = "white";
    followers1Blue.style.transition = "2s";

    wifiBlue.style.background = "#0000ff";
    wifiBlue.style.color = "white";
    wifiBlue.style.transition = "2s";

    signalBlue.style.background = "#0000ff";
    signalBlue.style.color = "white";
    signalBlue.style.transition = "2s";

    signal2Blue.style.background = "#0000ff";
    signal2Blue.style.color = "white";
    signal2Blue.style.transition = "2s";

    batteryBlue.style.background = "#0000ff";
    batteryBlue.style.color = "white";
    batteryBlue.style.transition = "2s";

    battery1Blue.style.background = "#0000ff";
    battery1Blue.style.color = "white";
    battery1Blue.style.transition = "2s";

    ellipsisBlue.style.background = "#0000ff";
    ellipsisBlue.style.color = "white";
    ellipsisBlue.style.transition = "2s";

    percentBlue.style.background = "#0000ff";
    percentBlue.style.color = "white";
    percentBlue.style.transition = "2s";

    timeBlue.style.background = "#0000ff";
    timeBlue.style.color = "white";
    timeBlue.style.transition = "2s";

    time2Blue.style.background = "#0000ff";
    time2Blue.style.color = "white";
    time2Blue.style.transition = "2s";

    mobileTimeBlue.style.background = "#0000ff";
    mobileTimeBlue.style.color = "white";
    mobileTimeBlue.style.transition = "2s";

    battery2Blue.style.background = "#0000ff";
    battery2Blue.style.color = "white";
    battery2Blue.style.transition = "2s";

    checkIconBlue.style.background = "#0000ff";
    checkIconBlue.style.color = "#0000ff";
    checkIconBlue.style.transition = "2s";

    LiveLocationBlue.style.background = "#0000ff";
    LiveLocationBlue.style.color = "white";
    LiveLocationBlue.style.transition = "2s";

    urlBlue.style.background = "#0000ff";
    urlBlue.style.color = "white";
    urlBlue.style.transition = "2s";

    ellipsis1Blue.style.background = "#0000ff";
    ellipsis1Blue.style.color = "white";
    ellipsis1Blue.style.transition = "2s";
  }
});
/*end blue mode*/

/*start gold mode*/
const toggle2 = document.getElementById("togglegold");
const ProfileButtongold = document.getElementById("Profile-button");
const myElement2 = document.getElementById("myElement");
const followinggold = document.getElementById("following1");
const followersgold = document.getElementById("followers1");
const LiveLocationgold = document.getElementById("LiveLocation");
const timegold = document.getElementById("time");
const urlgold = document.getElementById("url");
const ellipsisgold = document.getElementById("ellipsis-h");
const androidViewgold = document.getElementById("androidView");
const iphoneViewgold = document.getElementById("iphoneView");
const signalgold = document.getElementById("signal");
const signal2gold = document.getElementById("signal2");
const wifigold = document.getElementById("wifi");
const batterygold = document.getElementById("battery");
const mobileTimegold = document.getElementById("mobileTime");
const battery1gold = document.getElementById("battery1");
const time2gold = document.getElementById("time2");
const percentgold = document.getElementById("percent");
const battery2gold = document.getElementById("battery2");
const ellipsis1gold = document.getElementById("ellipsis");

const mapsIcongray2 = document.getElementById("mapsIcongray");
const mapsIconWhite2 = document.getElementById("mapsIconWhite");
const mapsIconBlack2 = document.getElementById("mapsIconBlack");
const linkgrayIcon2 = document.getElementById("linkgrayIcon");
const linkWhiteIcon2 = document.getElementById("linkWhiteIcon");
const linkBlackIcon2 = document.getElementById("linkBlackIcon");
const dategrayIcon2 = document.getElementById("dategrayIcon");
const dateWhiteIcon2 = document.getElementById("dateWhiteIcon");
const dateBlackIcon2 = document.getElementById("dateBlackIcon");
const followinggold1 = document.getElementById("following");
const followersgold1 = document.getElementById("followers");
const accountNamegold = document.getElementById("accountName");
const subcribationgold = document.getElementById("subcribation");
const sarvamangalgold = document.getElementById("sarvamangal");
const userNamegold = document.getElementById("userNameDiv");
const totalTweetgold = document.getElementById("totalTweetDiv");
const totalTweetgold1 = document.getElementById("totalTweet");
const Tweetsgold = document.getElementById("Tweets");

toggle2.addEventListener("click", function () {
  const mapsIcongray = document.getElementById("mapsIcongray");
  mapsIcongray.style.display = "none";

  const mapsIconWhite = document.getElementById("mapsIconWhite");
  mapsIconWhite.style.display = "";

  const mapsIconBlack = document.getElementById("mapsIconBlack");
  mapsIconBlack.style.display = "none";

  const linkgrayIcon = document.getElementById("linkgrayIcon");
  linkgrayIcon.style.display = "none";

  const linkWhiteIcon = document.getElementById("linkWhiteIcon");
  linkWhiteIcon.style.display = "";

  const linkBlackIcon = document.getElementById("linkBlackIcon");
  linkBlackIcon.style.display = "none";

  const dategrayIcon = document.getElementById("dategrayIcon");
  dategrayIcon.style.display = "none";

  const dateWhiteIcon = document.getElementById("dateWhiteIcon");
  dateWhiteIcon.style.display = "";

  const dateBlackIcon = document.getElementById("dateBlackIcon");
  dateBlackIcon.style.display = "none";

  if (this.classList.toggle("gold")) {
    ProfileButtongold.style.background = "black";
    ProfileButtongold.style.color = "white";

    myElement2.style.background = "white";
    myElement2.style.color = "rgb(83, 100, 113)";
    myElement2.style.transition = "2s";

    desktopViewBody.style.background = "white";
    desktopViewBody.style.color = "rgb(83, 100, 113)";
    desktopViewBody.style.transition = "2s";

    androidViewgold.style.background = "white";
    androidViewgold.style.color = "rgb(83, 100, 113)";
    androidViewgold.style.transition = "2s";

    Tweet.style.background = "white";
    Tweet.style.color = "black";
    Tweet.style.transition = "2s";

    iphoneViewgold.style.background = "white";
    iphoneViewgold.style.color = "rgb(83, 100, 113)";
    iphoneViewgold.style.transition = "2s";

    born1.style.background = "white";
    born1.style.color = "rgb(83, 100, 113)";
    born1.style.transition = "2s";

    totalTweetgold.style.background = "white";
    totalTweetgold.style.color = "rgb(83, 100, 113)";
    totalTweetgold.style.transition = "2s";

    followinggold.style.background = "white";
    followinggold.style.color = "rgb(83, 100, 113)";
    followinggold.style.transition = "2s";

    followersgold.style.background = "white";
    followersgold.style.color = "rgb(83, 100, 113)";
    followersgold.style.transition = "2s";

    LiveLocationgold.style.background = "white";
    LiveLocationgold.style.color = "rgb(83, 100, 113)";
    LiveLocationgold.style.transition = "2s";

    timegold.style.background = "white";
    timegold.style.color = "rgb(83, 100, 113)";
    timegold.style.transition = "2s";

    urlgold.style.background = "white";
    urlgold.style.color = "#485fc7";
    urlgold.style.transition = "2s";

    ellipsisgold.style.background = "white";
    ellipsisgold.style.color = "black";
    ellipsisgold.style.border = "1px solid gray";
    ellipsisgold.style.transition = "2s";

    signal2gold.style.background = "white";
    signal2gold.style.color = "rgb(83, 100, 113)";
    signal2gold.style.transition = "2s";

    wifigold.style.background = "white";
    wifigold.style.color = "rgb(83, 100, 113)";
    wifigold.style.transition = "2s";

    batterygold.style.background = "white";
    batterygold.style.color = "rgb(83, 100, 113)";
    batterygold.style.transition = "2s";

    battery1gold.style.background = "white";
    battery1gold.style.color = "rgb(83, 100, 113)";
    battery1gold.style.transition = "2s";

    time2gold.style.background = "white";
    time2gold.style.color = "rgb(83, 100, 113)";
    time2gold.style.transition = "2s";

    mobileTimegold.style.background = "white";
    mobileTimegold.style.color = "rgb(83, 100, 113)";
    mobileTimegold.style.transition = "2s";

    percentgold.style.background = "white";
    percentgold.style.color = "rgb(83, 100, 113)";
    percentgold.style.transition = "2s";

    battery2gold.style.background = "white";
    battery2gold.style.color = "rgb(83, 100, 113)";
    battery2gold.style.transition = "2s";

    ellipsis1gold.style.background = "white";
    ellipsis1gold.style.color = "rgb(83, 100, 113)";
    ellipsis1gold.style.transition = "2s";

    signalgold.style.background = "white";
    signalgold.style.color = "rgb(83, 100, 113)";
    signalgold.style.transition = "2s";

    followinggold1.style.background = "white";
    followinggold1.style.color = "black";
    followinggold1.style.transition = "2s";

    followersgold1.style.background = "white";
    followersgold1.style.color = "black";
    followersgold1.style.transition = "2s";

    accountNamegold.style.background = "white";
    accountNamegold.style.color = "black";
    accountNamegold.style.transition = "2s";

    subcribationgold.style.background = "white";
    subcribationgold.style.color = "black";
    subcribationgold.style.transition = "2s";

    sarvamangalgold.style.background = "white";
    sarvamangalgold.style.color = "rgb(83, 100, 113)";
    sarvamangalgold.style.transition = "2s";

    userNamegold.style.background = "white";
    userNamegold.style.color = "rgb(83, 100, 113)";
    userNamegold.style.transition = "2s";

    totalTweetgold1.style.background = "white";
    totalTweetgold1.style.color = "rgb(83, 100, 113)";
    totalTweetgold1.style.transition = "2s";

    Tweetsgold.style.background = "white";
    Tweetsgold.style.color = "black";
    Tweetsgold.style.transition = "2s";

    mapsIcongray2.style.display = "";
    mapsIconWhite2.style.display = "none";
    mapsIconBlack2.style.display = "none";
    linkgrayIcon2.style.display = "";
    linkWhiteIcon2.style.display = "none";
    linkBlackIcon2.style.display = "none";
    dategrayIcon2.style.display = "";
    dateWhiteIcon2.style.display = "none";
    dateBlackIcon2.style.display = "none";
  } else {
    dateBlackIcon2.style.display = "none";
    dateWhiteIcon2.style.display = "";
    dategrayIcon2.style.display = "none";
    linkBlackIcon2.style.display = "none";
    linkWhiteIcon2.style.display = "";
    linkgrayIcon2.style.display = "none";
    mapsIconWhite2.style.display = "";
    mapsIconBlack2.style.display = "none";
    mapsIcongray2.style.display = "none";

    Tweetsgold.style.background = "#FFD700";
    Tweetsgold.style.color = "white";
    Tweetsgold.style.transition = "2s";

    totalTweetgold1.style.background = "#FFD700";
    totalTweetgold1.style.color = "white";
    totalTweetgold1.style.transition = "2s";

    userNamegold.style.background = "#FFD700";
    userNamegold.style.color = "white";
    userNamegold.style.transition = "2s";

    /*userNamegold.style.background = "#FFD700";
    userNamegold.style.color = "white";
    userNamegold.style.transition = "2s";*/

    sarvamangalgold.style.background = "#FFD700";
    sarvamangalgold.style.color = "white";
    sarvamangalgold.style.transition = "2s";

    subcribationgold.style.background = "#FFD700";
    subcribationgold.style.color = "white";
    subcribationgold.style.transition = "2s";

    accountNamegold.style.background = "#FFD700";
    accountNamegold.style.color = "white";
    accountNamegold.style.transition = "2s";

    followersgold1.style.background = "#FFD700";
    followersgold1.style.color = "white";
    followersgold1.style.transition = "2s";

    followinggold1.style.background = "#FFD700";
    followinggold1.style.color = "white";
    followinggold1.style.transition = "2s";

    ProfileButtongold.style.background = "white";
    ProfileButtongold.style.color = "black";

    myElement2.style.background = "#FFD700";
    myElement2.style.color = "white";
    myElement2.style.transition = "2s";

    desktopViewBody.style.background = "#FFD700";
    desktopViewBody.style.color = "white";
    desktopViewBody.style.transition = "2s";

    androidViewgold.style.background = "#FFD700";
    androidViewgold.style.color = "white";
    androidViewgold.style.transition = "2s";

    Tweet.style.background = "#FFD700";
    Tweet.style.color = "white";
    Tweet.style.transition = "2s";

    iphoneViewgold.style.background = "#FFD700";
    iphoneViewgold.style.color = "white";
    iphoneViewgold.style.transition = "2s";

    born1.style.background = "#FFD700";
    born1.style.color = "white";
    born1.style.transition = "2s";

    totalTweetgold.style.background = "#FFD700";
    totalTweetgold.style.color = "white";
    totalTweetgold.style.transition = "2s";

    followinggold.style.background = "#FFD700";
    followinggold.style.color = "white";
    followinggold.style.transition = "2s";

    followersgold.style.background = "#FFD700";
    followersgold.style.color = "white";
    followersgold.style.transition = "2s";

    LiveLocationgold.style.background = "#FFD700";
    LiveLocationgold.style.color = "white";
    LiveLocationgold.style.transition = "2s";

    timegold.style.background = "#FFD700";
    timegold.style.color = "white";
    timegold.style.transition = "2s";

    urlgold.style.background = "#FFD700";
    urlgold.style.color = "white";
    urlgold.style.transition = "2s";

    ellipsisgold.style.background = "#FFD700";
    ellipsisgold.style.color = "white";
    ellipsisgold.style.border = "1px solid white";
    ellipsisgold.style.transition = "2s";

    signal2gold.style.background = "#FFD700";
    signal2gold.style.color = "white";
    signal2gold.style.transition = "2s";

    wifigold.style.background = "#FFD700";
    wifigold.style.color = "white";
    wifigold.style.transition = "2s";

    signalgold.style.background = "#FFD700";
    signalgold.style.color = "white";
    signalgold.style.transition = "2s";

    batterygold.style.background = "#FFD700";
    batterygold.style.color = "white";
    batterygold.style.transition = "2s";

    battery1gold.style.background = "#FFD700";
    battery1gold.style.color = "white";
    battery1gold.style.transition = "2s";

    time2gold.style.background = "#FFD700";
    time2gold.style.color = "white";
    time2gold.style.transition = "2s";

    mobileTimegold.style.background = "#FFD700";
    mobileTimegold.style.color = "white";
    mobileTimegold.style.transition = "2s";

    percentgold.style.background = "#FFD700";
    percentgold.style.color = "white";
    percentgold.style.transition = "2s";

    battery2gold.style.background = "#FFD700";
    battery2gold.style.color = "white";
    battery2gold.style.transition = "2s";

    ellipsis1gold.style.background = "#FFD700";
    ellipsis1gold.style.color = "white";
    ellipsis1gold.style.transition = "2s";
  }
});

/*end gold mode*/

/*start gray mode*/
const toggle3 = document.getElementById("togglegrey");
const ProfileButtongray = document.getElementById("Profile-button");

const myElement3 = document.getElementById("myElement");
const desktopViewBodygray = document.getElementById("desktopViewBody");
const Tweetgrey = document.getElementById("Tweet");
const totalTweetgray = document.getElementById("totalTweetDiv");
const ellipsisgray = document.getElementById("ellipsis-h");
const Tweetgray = document.getElementById("Tweet");
const born1gray = document.getElementById("born1");
const LiveLocationgray = document.getElementById("LiveLocation");
const timegray = document.getElementById("time");
const following1gray = document.getElementById("following1");
const followers1gary = document.getElementById("followers1");
const urlgray = document.getElementById("url");

const androidViewgray = document.getElementById("androidView");
const iphoneViewgray = document.getElementById("iphoneView");
const time2gray = document.getElementById("time2");
const battery1gray = document.getElementById("battery1");
const batterygray = document.getElementById("battery");
const signal2gray = document.getElementById("signal2");
const signalgray = document.getElementById("signal");
const wifigray = document.getElementById("wifi");
const mobileTimegray = document.getElementById("mobileTime");
const percentgray = document.getElementById("percent");
const battery2gray = document.getElementById("battery2");
const ellipsis1gray = document.getElementById("ellipsis");

const mapsIcongray3 = document.getElementById("mapsIcongray");
const mapsIconWhite3 = document.getElementById("mapsIconWhite");
const mapsIconBlack3 = document.getElementById("mapsIconBlack");
const linkgrayIcon3 = document.getElementById("linkgrayIcon");
const linkWhiteIcon3 = document.getElementById("linkWhiteIcon");
const linkBlackIcon3 = document.getElementById("linkBlackIcon");
const dategrayIcon3 = document.getElementById("dategrayIcon");
const dateWhiteIcon3 = document.getElementById("dateWhiteIcon");
const dateBlackIcon3 = document.getElementById("dateBlackIcon");

const followinggray = document.getElementById("following");
const followersgray = document.getElementById("followers");
const accountNamegray = document.getElementById("accountName");
const subcribationgray = document.getElementById("subcribation");
const sarvamangalgray = document.getElementById("sarvamangal");
const userNamegray = document.getElementById("userNameDiv");
const totalTweetgray1 = document.getElementById("totalTweet");
const Tweetsgray = document.getElementById("Tweets");

toggle3.addEventListener("click", function () {
  const mapsIcongray = document.getElementById("mapsIcongray");
  mapsIcongray.style.display = "none";

  const mapsIconWhite = document.getElementById("mapsIconWhite");
  mapsIconWhite.style.display = "none";

  const mapsIconBlack = document.getElementById("mapsIconBlack");
  mapsIconBlack.style.display = "";

  const linkgrayIcon = document.getElementById("linkgrayIcon");
  linkgrayIcon.style.display = "none";

  const linkWhiteIcon = document.getElementById("linkWhiteIcon");
  linkWhiteIcon.style.display = "none";

  const linkBlackIcon = document.getElementById("linkBlackIcon");
  linkBlackIcon.style.display = "";

  const dategrayIcon = document.getElementById("dategrayIcon");
  dategrayIcon.style.display = "none";

  const dateWhiteIcon = document.getElementById("dateWhiteIcon");
  dateWhiteIcon.style.display = "none";

  const dateBlackIcon = document.getElementById("dateBlackIcon");
  dateBlackIcon.style.display = "";

  if (this.classList.toggle("grey")) {
    ProfileButtongray.style.background = "black";
    ProfileButtongray.style.color = "white";

    myElement3.style.background = "white";
    myElement3.style.color = "rgb(83, 100, 113)";
    myElement3.style.transition = "2s";

    desktopViewBodygray.style.background = "white";
    desktopViewBodygray.style.color = "rgb(83, 100, 113)";
    desktopViewBodygray.style.transition = "2s";

    Tweetgrey.style.background = "white";
    Tweetgrey.style.color = "black";
    Tweetgrey.style.transition = "2s";

    totalTweetgray.style.background = "white";
    totalTweetgray.style.color = "rgb(83, 100, 113)";
    totalTweetgray.style.transition = "2s";

    ellipsisgray.style.background = "white";
    ellipsisgray.style.color = "black";
    ellipsisgray.style.border = "1px solid gray";
    ellipsisgray.style.transition = "2s";

    /*totalTweetgray.style.background = "white";
    totalTweetgray.style.color = "rgb(83, 100, 113)";
    totalTweetgray.style.transition = "2s";*/
    Tweetgray.style.background = "white";
    Tweetgray.style.color = "black";
    Tweetgray.style.transition = "2s";

    born1gray.style.background = "white";
    born1gray.style.color = "rgb(83, 100, 113)";
    born1gray.style.transition = "2s";

    LiveLocationgray.style.background = "white";
    LiveLocationgray.style.color = "rgb(83, 100, 113)";
    LiveLocationgray.style.transition = "2s";

    timegray.style.background = "white";
    timegray.style.color = "rgb(83, 100, 113)";
    timegray.style.transition = "2s";

    following1gray.style.background = "white";
    following1gray.style.color = "rgb(83, 100, 113)";
    following1gray.style.transition = "2s";

    followers1gary.style.background = "white";
    followers1gary.style.color = "rgb(83, 100, 113)";
    followers1gary.style.transition = "2s";

    urlgray.style.background = "white";
    urlgray.style.color = "#485fc7";
    urlgray.style.transition = "2s";

    androidViewgray.style.background = "white";
    androidViewgray.style.color = "rgb(83, 100, 113)";
    androidViewgray.style.transition = "2s";

    iphoneViewgray.style.background = "white";
    iphoneViewgray.style.color = "rgb(83, 100, 113)";
    iphoneViewgray.style.transition = "2s";

    time2gray.style.background = "white";
    time2gray.style.color = "rgb(83, 100, 113)";
    time2gray.style.transition = "2s";

    battery1gray.style.background = "white";
    battery1gray.style.color = "rgb(83, 100, 113)";
    battery1gray.style.transition = "2s";

    batterygray.style.background = "white";
    batterygray.style.color = "rgb(83, 100, 113)";
    batterygray.style.transition = "2s";

    signal2gray.style.background = "white";
    signal2gray.style.color = "rgb(83, 100, 113)";
    signal2gray.style.transition = "2s";

    signalgray.style.background = "white";
    signalgray.style.color = "rgb(83, 100, 113)";
    signalgray.style.transition = "2s";

    wifigray.style.background = "white";
    wifigray.style.color = "rgb(83, 100, 113)";
    wifigray.style.transition = "2s";

    mobileTimegray.style.background = "white";
    mobileTimegray.style.color = "rgb(83, 100, 113)";
    mobileTimegray.style.transition = "2s";

    percentgray.style.background = "white";
    percentgray.style.color = "rgb(83, 100, 113)";
    percentgray.style.transition = "2s";

    battery2gray.style.background = "white";
    battery2gray.style.color = "rgb(83, 100, 113)";
    battery2gray.style.transition = "2s";

    ellipsis1gray.style.background = "white";
    ellipsis1gray.style.color = "rgb(83, 100, 113)";
    ellipsis1gray.style.transition = "2s";

    followinggray.style.background = "white";
    followinggray.style.color = "black";
    followinggray.style.transition = "2s";

    followersgray.style.background = "white";
    followersgray.style.color = "black";
    followersgray.style.transition = "2s";

    accountNamegray.style.background = "white";
    accountNamegray.style.color = "black";
    accountNamegray.style.transition = "2s";

    subcribationgray.style.background = "white";
    subcribationgray.style.color = "black";
    subcribationgray.style.transition = "2s";

    sarvamangalgray.style.background = "white";
    sarvamangalgray.style.color = "rgb(83, 100, 113)";
    sarvamangalgray.style.transition = "2s";

    userNamegray.style.background = "white";
    userNamegray.style.color = "rgb(83, 100, 113)";
    userNamegray.style.transition = "2s";

    totalTweetgray1.style.background = "white";
    totalTweetgray1.style.color = "rgb(83, 100, 113)";
    totalTweetgray1.style.transition = "2s";

    Tweetsgray.style.background = "white";
    Tweetsgray.style.color = "black";
    Tweetsgray.style.transition = "2s";

    mapsIcongray3.style.display = "";
    mapsIconWhite3.style.display = "none";
    mapsIconBlack3.style.display = "none";
    linkgrayIcon3.style.display = "";
    linkWhiteIcon3.style.display = "none";
    linkBlackIcon3.style.display = "none";
    dategrayIcon3.style.display = "";
    dateWhiteIcon3.style.display = "none";
    dateBlackIcon3.style.display = "none";
  } else {
    dateBlackIcon3.style.display = "";
    dateWhiteIcon3.style.display = "none";
    dategrayIcon3.style.display = "none";
    linkBlackIcon3.style.display = "";
    linkWhiteIcon3.style.display = "none";
    linkgrayIcon3.style.display = "none";
    mapsIconWhite3.style.display = "none";
    mapsIconBlack3.style.display = "";
    mapsIcongray3.style.display = "none";

    Tweetsgray.style.background = "#808080";
    Tweetsgray.style.color = "black";
    Tweetsgray.style.transition = "2s";

    totalTweetgray1.style.background = "#808080";
    totalTweetgray1.style.color = "black";
    totalTweetgray1.style.transition = "2s";

    userNamegray.style.background = "#808080";
    userNamegray.style.color = "black";
    userNamegray.style.transition = "2s";

    sarvamangalgray.style.background = "#808080";
    sarvamangalgray.style.color = "black";
    sarvamangalgray.style.transition = "2s";

    subcribationgray.style.background = "#808080";
    subcribationgray.style.color = "black";
    subcribationgray.style.transition = "2s";

    accountNamegray.style.background = "#808080";
    accountNamegray.style.color = "black";
    accountNamegray.style.transition = "2s";

    followersgray.style.background = "#808080";
    followersgray.style.color = "black";
    followersgray.style.transition = "2s";

    followinggray.style.background = "#808080";
    followinggray.style.color = "black";
    followinggray.style.transition = "2s";

    ProfileButtongray.style.background = "black";
    ProfileButtongray.style.color = "white";

    myElement3.style.background = "#808080";
    myElement3.style.color = "black";
    myElement3.style.transition = "2s";

    desktopViewBodygray.style.background = "#808080";
    desktopViewBodygray.style.color = "black";
    desktopViewBodygray.style.transition = "2s";

    Tweetgray.style.background = "#808080";
    Tweetgray.style.color = "black";
    Tweetgray.style.transition = "2s";

    totalTweetgray.style.background = "#808080";
    totalTweetgray.style.color = "black";
    totalTweetgray.style.transition = "2s";

    born1gray.style.background = "#808080";
    born1gray.style.color = "black";
    born1gray.style.transition = "2s";

    LiveLocationgray.style.background = "#808080";
    LiveLocationgray.style.color = "black";
    LiveLocationgray.style.transition = "2s";

    timegray.style.background = "#808080";
    timegray.style.color = "black";
    timegray.style.transition = "2s";

    following1gray.style.background = "#808080";
    following1gray.style.color = "black";
    following1gray.style.transition = "2s";

    followers1gary.style.background = "#808080";
    followers1gary.style.color = "black";
    followers1gary.style.transition = "2s";

    urlgray.style.background = "#808080";
    urlgray.style.color = "black";
    urlgray.style.transition = "2s";

    ellipsisgray.style.background = "#808080";
    ellipsisgray.style.color = "black";
    ellipsisgray.style.border = "1px solid white";
    ellipsisgray.style.transition = "2s";

    Tweetgrey.style.background = "#808080";
    Tweetgrey.style.color = "black";

    /* totalTweetgray.style.background = "#808080";
    totalTweetgray.style.color = "black";
    totalTweetgray.style.transition = "2s";*/

    androidViewgray.style.background = "#808080";
    androidViewgray.style.color = "white";
    androidViewgray.style.transition = "2s";

    iphoneViewgray.style.background = "#808080";
    iphoneViewgray.style.color = "white";
    iphoneViewgray.style.transition = "2s";

    time2gray.style.background = "#808080";
    time2gray.style.color = "black";
    time2gray.style.transition = "2s";

    battery1gray.style.background = "#808080";
    battery1gray.style.color = "black";
    battery1gray.style.transition = "2s";

    batterygray.style.background = "#808080";
    batterygray.style.color = "black";
    batterygray.style.transition = "2s";

    signal2gray.style.background = "#808080";
    signal2gray.style.color = "black";
    signal2gray.style.transition = "2s";

    signalgray.style.background = "#808080";
    signalgray.style.color = "black";
    signalgray.style.transition = "2s";

    wifigray.style.background = "#808080";
    wifigray.style.color = "black";
    wifigray.style.transition = "2s";

    mobileTimegray.style.background = "#808080";
    mobileTimegray.style.color = "black";
    mobileTimegray.style.transition = "2s";

    percentgray.style.background = "#808080";
    percentgray.style.color = "black";
    percentgray.style.transition = "2s";

    battery2gray.style.background = "#808080";
    battery2gray.style.color = "black";
    battery2gray.style.transition = "2s";

    ellipsis1gray.style.background = "#808080";
    ellipsis1gray.style.color = "black";
    ellipsis1gray.style.transition = "2s";
  }
});

/*end gray mode*/
function preview_image(event, id) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById(id);
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);

  if (id == "changeImage2") {
    var reader1 = new FileReader();
    reader1.onload = function () {
      var output1 = document.getElementById("changeImage4");
      output1.src = reader1.result;
    };
    reader1.readAsDataURL(event.target.files[0]);
  } else {
    var reader2 = new FileReader();
    reader2.onload = function () {
      var output2 = document.getElementById("changeImage3");
      output2.src = reader2.result;
    };
    reader2.readAsDataURL(event.target.files[0]);
  }
}

function nFormatter(num) {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num;
}

/* start show-hide icon*/
function hideIcon(elementId) {
  const hideElementId = document.getElementById(elementId);
  hideElementId.style.display = "none";
}
function showIcon(elementId) {
  const hideElementId = document.getElementById(elementId);
  hideElementId.style.display = "";
}

/* end show hide icon
/*start from submit*/
function updateInput(value) {
  //alert(value);

  checkBox = document.getElementById("input1");
  checkBox1 = document.getElementById("iphoneInput");
  if (checkBox.checked) {
    document.getElementById("androidViewTime").innerHTML =
      document.getElementById("input3").value;
    document.getElementById("batteryPercentage").innerHTML =
      document.getElementById("input4").value;
  }
  if (checkBox1.checked) {
    document.getElementById("mobileTime").innerHTML =
      document.getElementById("input3").value;
    document.getElementById("batteryPercentage1").innerHTML =
      document.getElementById("input4").value;
  }

  document.getElementById("accountName").innerHTML =
    document.getElementById("input5").value;

  document.getElementById("subcribation").innerHTML =
    document.getElementById("inputSubcribation").value;

  /*start government flag icon*/
  let governmenticon = document.getElementById("inputgovernment").value;
  if (governmenticon) {
    showIcon("flagicon");
  } else {
    hideIcon("flagicon");
  }
  document.getElementById("governmenticon").innerHTML = governmenticon;
  /*end government flag icon*/

  let liveLocationData = document.getElementById("inputLiveLocation").value;
  if (liveLocationData) {
    showIcon("liveIcon");
  } else {
    hideIcon("liveIcon");
  }
  document.getElementById("LiveLocation").innerHTML = liveLocationData;

  let hideinputUrl = document.getElementById("urlInput").value;
  if (hideinputUrl) {
    showIcon("urlicon");
  } else {
    hideIcon("urlicon");
  }
  document.getElementById("url").innerHTML = hideinputUrl;

  let joinDateshowIcon = document.getElementById("input8").value;
  if (joinDateshowIcon) {
    showIcon("joinDateIcon");
  } else {
    hideIcon("joinDateIcon");
  }
  document.getElementById("joinDate").innerHTML = joinDateshowIcon;

  var totalTweets = nFormatter(document.getElementById("input11").value);
  document.getElementById("totalTweet").innerHTML = totalTweets;

  document.getElementById("Tweet").innerHTML =
    document.getElementById("input5").value;

  document.getElementById("userName").innerHTML =
    document.getElementById("input6").value;

  document.getElementById("inputgovernment").value =
    document.getElementById("selectInput").value;

  document.getElementById("governmenticon").innerHTML =
    document.getElementById("inputgovernment").value;

  /*document.getElementById("governmenticon").innerHTML =
    document.getElementById("inputgovernment").value;*/

  /*document.getElementById("dob").innerHTML =
    document.getElementById("input7").value;*/

  let following = nFormatter(document.getElementById("input9").value);
  document.getElementById("following").innerHTML = following;

  let followers = nFormatter(document.getElementById("input10").value);
  document.getElementById("followers").innerHTML = followers;

  /* document.getElementById("joinDate").innerHTML =
    document.getElementById("input8").value;*/

  /*document.getElementById("url").innerHTML =
    document.getElementById("urlInput").value;*/
}
/*end from submit*/
function myFunction() {
  let text = document.getElementById("inputgovernment").value;
  document.getElementById("governmenticon").innerHTML = text;
}
/*start mobile display */
function mobileStyle() {
  var element = document.getElementById("myElement");
  element.style.margin = "28px 109px 24px 99px";

  /* var mobilediv = document.getElementById("ml-13");
  mobilediv.style.marginRight = "0px";
  mobilediv.style.marginLeft = "-144px";*/

  var joinDate = document.getElementById("time");
  joinDate.style.position = "absolute";
  joinDate.style.margin = "68px 0px 0px 0px";

  /*var outputborn = document.getElementById("born");
  outputborn.style.position = "absolute";
  outputborn.style.margin = "63px 0px 0px 0px";*/

  var followersDiv = document.getElementById("followersDiv");
  followersDiv.style.margin = "41px 0px 0px 0px";

  let rounded = document.getElementById("changeImage4");
  rounded.style.width = "80px";
  rounded.style.height = "80px";

  let followingButton = document.getElementById("followingButton");
  followingButton.style.marginTop = "20px";

  let footer = document.getElementById("footer");
  footer.style.marginLeft = "-12px";
  footer.style.marginRight = "-36px";

  let desktopView = document.getElementById("desktopView");
  let mobileView = document.getElementById("mobileView");
  let mobileViewBody = document.getElementById("mobileViewBody");
  let desktopViewBody = document.getElementById("desktopViewBody");
  let twitterIcon = document.getElementById("twitterIcon");

  mobileViewBody.style.display = "";
  desktopViewBody.style.display = "none";
  desktopView.style.display = "none";
  mobileView.style.display = "";
  twitterIcon.style.display = "";

  let iphoneView = document.getElementById("iphoneView");
  let androidView = document.getElementById("androidView");

  iphoneView.style.display = "none";
  androidView.style.display = "";

  let twitterHeaderIcon = document.getElementById("twitterHeaderIcon");
  mobileViewBody.style.display = "";
  desktopViewBody.style.display = "none";
  desktopView.style.display = "none";
  mobileView.style.display = "";
  twitterHeaderIcon.style.display = "";

  let activeButton2 = document.getElementById("activeButton2");
  activeButton2.style.backgroundColor = "#00d1b2";
  activeButton2.style.Color = "#FFFFFF";

  let activeButton = document.getElementById("activeButton");
  activeButton.style.backgroundColor = "";
  activeButton.style.Color = "";
}
/*end mobile display*/

/*start disktop display*/
function desktopStyle() {
  /* var outputborn = document.getElementById("born");
  outputborn.style.position = "";
  outputborn.style.margin = "";*/

  var joinDate = document.getElementById("time");
  joinDate.style.position = "";
  joinDate.style.margin = "";

  var followersDiv = document.getElementById("followersDiv");
  followersDiv.style.margin = "";

  let followingButton = document.getElementById("followingButton");
  followingButton.style.marginTop = "";

  let rounded = document.getElementById("changeImage4");
  rounded.style.width = "115px";
  rounded.style.height = "115px";

  let footer = document.getElementById("footer");
  footer.style.marginLeft = "20px";
  footer.style.marginRight = "-76px";

  var element = document.getElementById("myElement");
  element.style.margin = "0px";
  let desktopView = document.getElementById("desktopView");
  let mobileView = document.getElementById("mobileView");
  let mobileViewBody = document.getElementById("mobileViewBody");
  let desktopViewBody = document.getElementById("desktopViewBody");
  let twitterIcon = document.getElementById("twitterIcon");

  mobileViewBody.style.display = "none";
  desktopViewBody.style.display = "";

  desktopView.style.display = "";
  mobileView.style.display = "none";
  twitterIcon.style.display = "none";

  let twitterHeaderIcon = document.getElementById("twitterHeaderIcon");
  mobileViewBody.style.display = "none";
  desktopViewBody.style.display = "";
  desktopView.style.display = "";
  mobileView.style.display = "none";
  twitterHeaderIcon.style.display = "none";

  let activeButton = document.getElementById("activeButton");
  activeButton.style.backgroundColor = "#00d1b2 ";
  activeButton.style.Color = "#FFFFFF ";

  let activeButton2 = document.getElementById("activeButton2");
  activeButton2.style.backgroundColor = "";
  activeButton.style.Color = "";
}

function verifyAccount(value) {
  document.getElementById("blue").style.display = "none";
  document.getElementById("BlueIcon").style.display = "none";
  document.getElementById("gray").style.display = "none";
  document.getElementById("greyIcon").style.display = "none";
  document.getElementById("allow").style.display = "none";
  document.getElementById("yellowIcon").style.display = "none";
  document.getElementById("flag").style.display = "none";
  let checkBox;
  if (value == 1) {
    checkBox = document.getElementById("input2");
  } else {
    checkBox = document.getElementById("input21");
  }

  let element = document.getElementById("verifyAccount");
  let elements = document.getElementById("checkIcon");
  //alert(checkBox.checked);
  if (checkBox.checked) {
    element.style.display = "";
    elements.style.display = "";
  } else {
    element.style.display = "none";
    elements.style.display = "none";
  }
}

function switchAndroid() {
  let iphoneView = document.getElementById("iphoneView");
  let androidView = document.getElementById("androidView");

  iphoneView.style.display = "none";
  androidView.style.display = "";
}

function switchIphone() {
  let iphoneView = document.getElementById("iphoneView");
  let androidView = document.getElementById("androidView");

  iphoneView.style.display = "";
  androidView.style.display = "none";
}
/* end disktop display*/

/*start download imgags file */
content = document.getElementById("myElement");

function downloadImage() {
  domtoimage.toBlob(content).then(function (blob) {
    window.saveAs(blob, "my-node.png");
  });
}

/*end download imags file*/

/*active button color*/
function changeColor(htmlEl) {
  htmlEl.style.backgroundColor = "green";
}

/*differnce-diffence icon show*/
const showBlueIcon = (event) => {
  event.preventDefault();
  document.getElementById("blue").style.display = "";
  document.getElementById("BlueIcon").style.display = "";
  document.getElementById("gray").style.display = "none";
  document.getElementById("greyIcon").style.display = "none";
  document.getElementById("allow").style.display = "none";
  document.getElementById("yellowIcon").style.display = "none";
  document.getElementById("verifyAccount").style.display = "none";
  document.getElementById("checkIcon").style.display = "none";
  document.getElementById("flag").style.display = "none";
  document.getElementById("governmentdiv").style.display = "none";
  //document.getElementById("BlueIconbtn").style.backgroundColor = "#48c78e";
  let BlueIconbtn = document.getElementById("BlueIconbtn");
  BlueIconbtn.style.backgroundColor = "#48c78e";
  BlueIconbtn.style.color = "white";

  let greyIconbtn = document.getElementById("greyIconbtn");
  greyIconbtn.style.backgroundColor = "";
  greyIconbtn.style.color = "";

  let yellowIconbtn = document.getElementById("yellowIconbtn");
  yellowIconbtn.style.backgroundColor = "";
  yellowIconbtn.style.color = "";

  let noneIconbtn = document.getElementById("noneIconbtn");
  noneIconbtn.style.backgroundColor = "white";
  noneIconbtn.style.color = "black";
};

const showGreyIcon = (event) => {
  event.preventDefault();
  document.getElementById("governmentdiv").style.display = "";
  document.getElementById("flag").style.display = "";
  document.getElementById("gray").style.display = "";
  document.getElementById("greyIcon").style.display = "";
  document.getElementById("blue").style.display = "none";
  document.getElementById("BlueIcon").style.display = "none";
  document.getElementById("allow").style.display = "none";
  document.getElementById("yellowIcon").style.display = "none";
  document.getElementById("verifyAccount").style.display = "none";
  document.getElementById("checkIcon").style.display = "none";
  let BlueIconbtn = document.getElementById("BlueIconbtn");
  BlueIconbtn.style.backgroundColor = "";
  BlueIconbtn.style.color = "";
  let greyIconbtn = document.getElementById("greyIconbtn");
  greyIconbtn.style.backgroundColor = "#48c78e";
  greyIconbtn.style.color = "white";

  let yellowIconbtn = document.getElementById("yellowIconbtn");
  yellowIconbtn.style.backgroundColor = "";
  yellowIconbtn.style.color = "";

  let noneIconbtn = document.getElementById("noneIconbtn");
  noneIconbtn.style.backgroundColor = "white";
  noneIconbtn.style.color = "black";
};

const showYellowIcon = (event) => {
  event.preventDefault();
  document.getElementById("allow").style.display = "";
  document.getElementById("yellowIcon").style.display = "";
  document.getElementById("blue").style.display = "none";
  document.getElementById("BlueIcon").style.display = "none";
  document.getElementById("gray").style.display = "none";
  document.getElementById("greyIcon").style.display = "none";
  document.getElementById("verifyAccount").style.display = "none";
  document.getElementById("checkIcon").style.display = "none";
  document.getElementById("flag").style.display = "none";
  document.getElementById("governmentdiv").style.display = "none";

  let BlueIconbtn = document.getElementById("BlueIconbtn");
  BlueIconbtn.style.backgroundColor = "";
  BlueIconbtn.style.color = "";

  let greyIconbtn = document.getElementById("greyIconbtn");
  greyIconbtn.style.backgroundColor = "";
  greyIconbtn.style.color = "";

  let yellowIconbtn = document.getElementById("yellowIconbtn");
  yellowIconbtn.style.backgroundColor = "#48c78e";
  yellowIconbtn.style.color = "white";

  let noneIconbtn = document.getElementById("noneIconbtn");
  noneIconbtn.style.backgroundColor = "white";
  noneIconbtn.style.color = "black";
};

const clearIcon = (event) => {
  event.preventDefault();
  document.getElementById("blue").style.display = "none";
  document.getElementById("BlueIcon").style.display = "none";
  document.getElementById("gray").style.display = "none";
  document.getElementById("greyIcon").style.display = "none";
  document.getElementById("allow").style.display = "none";
  document.getElementById("yellowIcon").style.display = "none";
  document.getElementById("verifyAccount").style.display = "none";
  document.getElementById("checkIcon").style.display = "none";
  document.getElementById("flag").style.display = "none";
  document.getElementById("governmentdiv").style.display = "none";

  let BlueIconbtn = document.getElementById("BlueIconbtn");
  BlueIconbtn.style.backgroundColor = "";
  BlueIconbtn.style.color = "";

  let greyIconbtn = document.getElementById("greyIconbtn");
  greyIconbtn.style.backgroundColor = "";
  greyIconbtn.style.color = "";

  let yellowIconbtn = document.getElementById("yellowIconbtn");
  yellowIconbtn.style.backgroundColor = "";
  yellowIconbtn.style.color = "";

  let noneIconbtn = document.getElementById("noneIconbtn");
  noneIconbtn.style.backgroundColor = "#48c78e";
  noneIconbtn.style.color = "white";
};

function Followingbtn() {
  document.getElementById("ellipsis-h2").style.display = "";
  document.getElementById("Profile-button").style.display = "none";
  document.getElementById("idfollowing").style.display = "";
}

function alertdiv() {
  alert("");
  document.getElementById("alertDiv").style.display = "";
}