document.getElementById('year').textContent = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", function () {
    let about = document.getElementById("about");
    let aboutText = document.getElementById("aboutText");

    // Aplicando o background gradient no #about
    about.style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0) 16%, rgba(0, 0, 0, 0.85) 62%)";
   

    // Configuração inicial para ocultar suavemente o aboutText
    aboutText.style.opacity = "0";
    aboutText.style.visibility = "hidden";
    aboutText.style.transition = "opacity 0.5s ease, visibility 0.5s ease";

    about.onmouseover = function showAbout() {
        aboutText.style.opacity = "1";
        aboutText.style.visibility = "visible";
    };

    about.onmouseout = function hideAbout() {
        aboutText.style.opacity = "0";
        aboutText.style.visibility = "hidden";
    };
});