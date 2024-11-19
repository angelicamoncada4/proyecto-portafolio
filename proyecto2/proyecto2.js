// Smooth scrolling para los enlaces del menú de navegación
document.querySelectorAll('.navegacion__elemento a').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
        e.preventDefault();
        const seccionId = this.getAttribute('href');
        document.querySelector(seccionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validación básica del formulario de contacto
const formulario = document.querySelector('.contacto__formulario');
formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.querySelector('input[type="text"]').value.trim();
    const correo = document.querySelector('input[type="email"]').value.trim();
    const mensaje = document.querySelector('textarea').value.trim();

    if (!nombre || !correo || !mensaje) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    if (!validarCorreo(correo)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }

    alert('¡Gracias por contactarme! Responderé lo antes posible.');
    formulario.reset();
});

// Función para validar correos electrónicos
function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

// Cambiar color del menú al hacer scroll
window.addEventListener('scroll', function () {
    const cabecera = document.querySelector('.cabecera');
    if (window.scrollY > 50) {
        cabecera.classList.add('cabecera--scrolled');
    } else {
        cabecera.classList.remove('cabecera--scrolled');
    }
});
