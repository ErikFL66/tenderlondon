const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logoclick");
const pre = document.querySelector(".ticketbuttonpre");
const presave = document.querySelector(".ticketbuttonpresave");
const phono = document.querySelector(".phono");
const loppen = document.querySelector(".loppen");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

logo.style.cursor = "pointer";

logo.addEventListener("click", homeclick);
function homeclick() {
  console.log("homeclick");
  location.href = "index.html";
}

pre.addEventListener("click", prelink);

function prelink() {
  console.log("prelink");
  location.href = "https://tenderyouth.bandcamp.com/album/turning-torso";
}

presave.addEventListener("click", presavelink);

function presavelink() {
  console.log("presavelink");
  location.href = "https://orcd.co/turningtorso";
}

phono.addEventListener("click", phonolink);

function phonolink() {
  console.log("phonolink");
  location.href = "https://phono.billetten.dk/index/eventdetails/eventno/151352";
}

loppen.addEventListener("click", loppenlink);

function loppenlink() {
  console.log("loppenlink");
  location.href = "https://www.eventim-light.com/dk/a/62a9b86d97f9043b34af80a7/e/6a576a7fb4d95f9d96a9c259";
}

var tag = document.createElement("script");
tag.id = "iframe-demo";
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("existing-iframe-example", {
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player("player", {
    videoId: "M7lc1UVf-VE",
    playerVars: { autoplay: 1, controls: 0 },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
      onError: onPlayerError,
    },
  });
}
