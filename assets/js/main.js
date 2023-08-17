/* =============== SHOW MENU =============== */
const navMenu = document.getElementById("nav-menu"),
  navClose = document.getElementById("nav-close"),
  navToggle = document.getElementById("nav-toggle");

/* ===== Menu Show ===== */
/* Validate If Constant Exist */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show__menu");
  });
}

/* ===== Menu Hidden ===== */
/* Validate If Constant Exist */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
  });
}

/* =============== REMOVE MENU MOBILE =============== */
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  // When We Click On Each Nav Link We Remove The Show Menu Class
  navMenu.classList.remove("show__menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/* =============== SHADOW HEADER =============== */
const shadowHeader = () => {
  const header = document.getElementById("header");

  // When The Scroll Height Is Greater Than 50 Viewport
  // Add The Shadow Header Class
  this.scrollY >= 40
    ? header.classList.add("shadow__header")
    : header.classList.remove("shadow__header");
};

window.addEventListener("scroll", shadowHeader);

/* =============== EMAIL JS =============== */

/* =============== SHOW SCROLL UP =============== */

/* =============== SCROLL SECTIONS ACTIVE LINK =============== */

/* =============== DARK LIGHT THEME =============== */

/* =============== SCROLL REVEAL ANIMATION =============== */
