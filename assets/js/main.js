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
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // ServiceID - TemplateID - #formID - PublicKey
  emailjs
    .sendForm(
      "service_vjk26hb",
      "template_09bnjqo",
      "#contact-form",
      "Y1OK4YEBcsENY0bod"
    )
    .then(
      () => {
        // Show Message Sent
        contactMessage.textContent = "Message sent successfully ✅";

        // Remove Message After Five Seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // Clear Input Fields
        contactForm.reset();
      },
      () => {
        // Show Error Message
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/* =============== SHOW SCROLL UP =============== */
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  // When The Scroll Is Higher Than 350 ViewPort Height,
  // Add The scroll___up Class
  this.scrollY >= 350
    ? scrollUp.classList.add("scroll___up")
    : scrollUp.classList.remove("scroll___up");
};

window.addEventListener("scroll", scrollUp);

/* =============== SCROLL SECTIONS ACTIVE LINK =============== */

/* =============== DARK LIGHT THEME =============== */

/* =============== SCROLL REVEAL ANIMATION =============== */
