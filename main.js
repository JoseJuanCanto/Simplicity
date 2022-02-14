const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('nav-active');
    
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`; //delay entre links 
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();
// ---------------------------------------------------------------------------------------------------
let precioBase = 30;
const total = document.getElementById('total');

function calcula (checkboxElem) {

    if (checkboxElem.checked) {
        precioBase += parseInt(checkboxElem.value);
        total.innerHTML = 'Cuota mensual TOTAL: ' + precioBase +'€'
    } else {    
        precioBase -= parseInt(checkboxElem.value);
        total.innerHTML = 'Cuota mensual TOTAL: ' + precioBase +'€'
    }
}
