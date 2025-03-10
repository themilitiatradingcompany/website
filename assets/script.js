// Smooth Scrolling Effect for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Navbar Background Change on Scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#1E293B"; // Dark Navy
    } else {
        navbar.style.backgroundColor = "transparent";
    }
});

// Fade-in Animation on Scroll
const fadeInElements = document.querySelectorAll(".fade-in");
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.5 });

fadeInElements.forEach(el => fadeInObserver.observe(el));
