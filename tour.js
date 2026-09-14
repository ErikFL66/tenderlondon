const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logoclick");
const phono = document.querySelector(".phono");
const loppen = document.querySelector(".loppen");
const sxse = document.querySelector(".sxse");
const rich = document.querySelector(".rich")
const castle = document.querySelector(".castle")
const workshop = document.querySelector(".workshop")

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

rich.addEventListener("click", richlink);

function richlink() {
  console.log("richlink");
  location.href = "https://www.instagram.com/p/Dc6XEtJDNJl/?img_index=1";
}

castle.addEventListener("click", castlelink);

function castlelink() {
  console.log("castlelink");
  location.href = "https://www.seetickets.com/event/rough-edges-presents-the-castle/the-castle/3705334?src=Tender+Youth";
}

workshop.addEventListener("click", workshoplink);

function workshoplink() {
  console.log("workshoplink");
  location.href = "https://ticketool.co.uk/events-fe/a27056cb-d259-4a20-b007-ab1b7c24b512?promoter=98f3bf22-e7a4-4de7-9f2f-229b53b84e54";
}