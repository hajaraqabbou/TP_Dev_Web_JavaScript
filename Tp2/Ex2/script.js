
function afficherMasquer() {
    let texte = document.getElementById("texte");
    let bouton = document.getElementById("bouton");

    if (texte.style.display === "none") {
        texte.style.display = "block";
        bouton.textContent = "Masquer";
    } else {
        texte.style.display = "none";
        bouton.textContent = "Afficher";
    }
}
