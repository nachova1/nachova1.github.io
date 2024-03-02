/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/* scroll sections active link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* remove toggle icon and navbar when click navbar link (scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* esta parte es para el carrusel de las imagenes de los certificados */

var certificadosContainer = document.getElementById('certificados-slider');
var currentIndex = 0;

function cambiarImagen(direccion) {
    var certificados = document.querySelectorAll('.certificado-item');

    if (direccion === 'anterior') {
        currentIndex = Math.max(currentIndex - 1, 0);
    } else if (direccion === 'siguiente') {
        currentIndex = Math.min(currentIndex + 1, certificados.length - 1);
    }

    var transformValue = -currentIndex * 100 + '%';
    certificadosContainer.style.transform = 'translateX(' + transformValue + ')';
}

/* scroll reveal para animaciones de textos*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .contacto form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .experiencia h3, .company, .nombreApp, .sobre-mi-content h3', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .job-title, .date, .description, .btn, .sobre-mi-content p', { origin: 'rigth' });