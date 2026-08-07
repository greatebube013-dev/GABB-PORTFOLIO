// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }
});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");
    menuBtn.textContent = "☰";

  });

});


// CONTACT FORM

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const name = document.getElementById("name").value;

  formMessage.textContent =
    `Thanks ${name}! Your message has been received.`;

  contactForm.reset();

});


// SIMPLE SCROLL ANIMATION

const elements = document.querySelectorAll(
  ".about-box, .skill, .service-card, .project-card"
);

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }

    });

  },
  {
    threshold: 0.15
  }
);


elements.forEach(element => {

  element.style.opacity = "0";
  element.style.transform = "translateY(25px)";
  element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

  observer.observe(element);

});