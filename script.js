
// =====================================
// MENU DE NAVEGACION
// =====================================

const botonMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

botonMenu.addEventListener("click", function () {

    menu.classList.toggle("active");

    const menuAbierto = menu.classList.contains("active");

    botonMenu.textContent = menuAbierto ? "✕" : "☰";

    botonMenu.setAttribute("aria-expanded", menuAbierto);

});


// =====================================
// CERRAR MENU AL SELECCIONAR
// =====================================

const enlaces = document.querySelectorAll(".menu a");

enlaces.forEach(function (enlace) {

    enlace.addEventListener("click", function () {

        menu.classList.remove("active");

        botonMenu.textContent = "☰";

        botonMenu.setAttribute("aria-expanded", "false");

    });

});


// =====================================
// ANIMACION DE LAS SECCIONES
// =====================================

const secciones = document.querySelectorAll(".seccion");

const observador = new IntersectionObserver(function (entradas) {

    entradas.forEach(function (entrada) {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("visible");

        }

    });

}, {
    threshold: 0.10
});

secciones.forEach(function (seccion) {

    observador.observe(seccion);

});


// =====================================
// ANIMACION DE LAS FOTOGRAFIAS
// =====================================

const fotografias = document.querySelectorAll(
    ".foto, .habilidad, .sobre-imagen"
);

const observadorFotos = new IntersectionObserver(function (entradas) {

    entradas.forEach(function (entrada) {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("aparecer");

            observadorFotos.unobserve(entrada.target);

        }

    });

}, {
    threshold: 0.15
});

fotografias.forEach(function (foto) {

    observadorFotos.observe(foto);

});
