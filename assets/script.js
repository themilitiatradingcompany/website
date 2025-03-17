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

// detect the deep link and scroll to the right section automatically
document.addEventListener("DOMContentLoaded", function () {
    let path = window.location.pathname.split("/").pop(); // Get the last part of the URL (e.g., "legal")

    const sectionMap = {
        "legal": "legal",
        "faq": "faq",
        "membership": "membership",
        "services": "services",
        "contact": "contact"
    };

    if (path in sectionMap) {
        // Change URL to the correct hash
        window.history.replaceState(null, "", `/#${sectionMap[path]}`);

        // Wait for the page to load, then scroll smoothly to the section
        setTimeout(() => {
            const target = document.getElementById(sectionMap[path]);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }, 500);
    }
});
