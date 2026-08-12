// ===============================
// MOBILE MENU TOGGLE
// ===============================
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

// Close the mobile menu after clicking a link
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });
});

// ===============================
// BACK TO TOP BUTTON
// ===============================
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===============================
// AUTO-UPDATE FOOTER YEAR
// ===============================
document.getElementById("year").textContent = new Date().getFullYear();
