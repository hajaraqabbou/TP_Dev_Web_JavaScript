
let recherche = document.getElementById("recherche");
let produits = document.querySelectorAll("#listeProduits li");

recherche.addEventListener("input", function() {
    let texte = recherche.value.toLowerCase().trim();

    for (let i = 0; i < produits.length; i++) {
        let nom = produits[i].textContent.toLowerCase();

        if (nom.includes(texte)) {
            produits[i].style.display = "block";
        } else {
            produits[i].style.display = "none";
        }
    }
});
