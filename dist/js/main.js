const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');

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
    } else {
        // Aggiungiamo alle classi presenti sull'hamburger la classe "open"
        hamburger.classList.add('open');
    };

    showMenu = !showMenu;
}