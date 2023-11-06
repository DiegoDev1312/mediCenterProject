const menuMobileButton = document.querySelector('.menu-mobile');
const menuMobileArea = document.querySelector('.menu nav ul');

function openMenu() {
    menuMobileArea.style.display = 'flex';
    menuMobileArea.classList.add('animation-menu');

    setTimeout(() => {
        menuMobileArea.classList.remove('animation-menu');
    }, 500);
}

function closeMenu() {
    menuMobileArea.classList.add('animation-close-menu');

    setTimeout(() => {
        menuMobileArea.classList.remove('animation-close-menu');
        menuMobileArea.style.display = 'none';
    }, 400);
}

function handleMenuPress() {
    return menuMobileArea.style.display === 'flex' ? closeMenu() : openMenu();
}

menuMobileButton.addEventListener('click', handleMenuPress);
