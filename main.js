//console.log("archivo levantado");

document.querySelector(".menu-btn").addEventListener("click", () => {
    //console.log("funciona")
    document.querySelector(".nav-menu").classList.toggle("show");

});



ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.cards', { delay: 100 });
ScrollReveal().reveal('.banner', { delay: 100 });
