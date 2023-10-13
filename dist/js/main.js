const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
// Query selector seleziona un solo elemento. In questo caso
// ci sono più elementi e occorre usare querySelectorAll
const navItems = document.querySelectorAll('.menu-nav__item');

// Inizialmente il menu è occultato.
let showMenu = false;

// Aggiungiamo un ascoltatore dell'evento click sul bottone
// in maniera non intrusiva
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (showMenu)
    {
        // Se il menu è già aperto, rimuoviamo la classe "open" dall'hamburger
        hamburger.classList.remove('open');        
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
    } else {
        // Aggiungiamo alle classi presenti sull'hamburger la classe "open"
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
    };

    showMenu = !showMenu;
}