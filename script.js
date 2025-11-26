document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger-menu");
    const mobileNav = document.querySelector(".mobile-nav-container");
    const mobileNavLinks = mobileNav.querySelectorAll("a");

    // Toggle mobile menu
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobileNav.classList.toggle("active");
    });

    // Close menu when a link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            mobileNav.classList.remove("active");
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!hamburger.contains(event.target) && !mobileNav.contains(event.target)) {
            hamburger.classList.remove("active");
            mobileNav.classList.remove("active");
        }
    });
});
