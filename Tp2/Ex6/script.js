
function ouvrirFermer() {
    let contenu = document.getElementById("contenu");
    let titre = document.getElementById("titre");

    contenu.classList.toggle("ouvert");

    if (contenu.classList.contains("ouvert")) {
        titre.textContent = "Menu ▲";
        titre.setAttribute("aria-expanded", "true");
    } else {
        titre.textContent = "Menu ▼";
        titre.setAttribute("aria-expanded", "false");
    }
}
