document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNavContainer = document.querySelector('.mobile-nav-container');

    if (hamburgerMenu && mobileNavContainer) {
        hamburgerMenu.addEventListener('click', () => {
            mobileNavContainer.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });
    }
});
