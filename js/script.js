document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const menuContainer = document.querySelector('.header-links-container');

    menuButton.addEventListener('click', function() {
        menuContainer.classList.toggle('active');
    });
});