const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logoclick");
const phono = document.querySelector(".phono");
const loppen = document.querySelector(".loppen");
const sxse = document.querySelector(".sxse");

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

sxse.addEventListener("click", sxselink);

function sxselink() {
  console.log("sxselink");
  location.href = "https://dice.fm/partner/tickets/event/mxn75v-sxse-summer-2026-12th-sep-the-old-dispensary-london-the-bear-london-dash-the-henge-store-london-henge-brixton-london-tickets?dice_id=10168125&dice_channel=web&dice_tags=organic&dice_campaign=FreakFreak&dice_feature=mio_marketing&utm_source=web&utm_campaign=FreakFreak&utm_medium=mio_marketing";
}
