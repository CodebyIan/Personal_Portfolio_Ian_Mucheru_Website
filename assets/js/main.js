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
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active__link");
    } else {
      sectionsClass.classList.remove("active__link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/* =============== DARK LIGHT THEME =============== */
const themeButton = document.getElementById("theme-button"),
  darkTheme = "dark-theme",
  iconTheme = "ri-sun-line";

// Previously Selected Topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We Obtain The Current Theme That The Interface Has By Validating
// The dark-Theme Class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We Validate If The User Previously Chose A Topic
if (selectedTheme) {
  // If The Validation Is Fulfilled, We Ask What The Issue
  // Was To Know If We Activated Or Deactivate It
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );

  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / Deactivate The Theme Manually With The Button
themeButton.addEventListener("click", () => {
  // Add Or Remove The Dark / Icon Theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // We Save The Theme And The Icon The User Chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/* =============== SCROLL REVEAL ANIMATION =============== */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true // Animation Repeat
});

sr.reveal(`.home__ian, .about__ian, .contact__mail`, { origin: "right" });
sr.reveal(
  `.section__title-1, .home__name, .home__info, .about__container, .about__info,
   .contact__social, .contact__data`,
  { origin: "left" }
);
sr.reveal(`.services__card, .projects__card`, { interval: 100 });
