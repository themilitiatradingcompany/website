// Ensure the header starts with a background color on page load
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    header.style.backgroundColor = "#1E293B"; // Dark Navy
});

// Navbar Background Change on Scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#1E293B"; // Dark Navy when scrolling
    } else {
        header.style.backgroundColor = "#1E293B"; // Keep the color when at the top
    }
});

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Fade-in Animation on Scroll
const fadeInElements = document.querySelectorAll("section");
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.3 });

fadeInElements.forEach(el => fadeInObserver.observe(el));