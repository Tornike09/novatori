const mainMenu = document.querySelector('.Mainmenu');
const openMenu = document.querySelector('.openMenu');
let menuOpen = false; // Initialize menu state

openMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (menuOpen) {
        // If the menu is open, close it
        openMenu.childNodes[0].classList.add("fa-bars");
        openMenu.childNodes[0].classList.remove("fa-x");
        mainMenu.style.right = '-100%';
    } else {
        // If the menu is closed, open it
        mainMenu.style.right = '0';
        openMenu.childNodes[0].classList.remove("fa-bars");
        openMenu.childNodes[0].classList.add("fa-x");
    }
    menuOpen = !menuOpen; // Toggle the menu state
}