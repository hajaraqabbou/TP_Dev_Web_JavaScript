
function adapterLayout() {
    let conteneur = document.getElementById("conteneur");
    let message = document.getElementById("message");

    if (window.innerWidth < 600) {
        conteneur.style.flexDirection = "column";
        message.textContent = "Affichage mobile";
    } else {
        conteneur.style.flexDirection = "row";
        message.textContent = "Affichage ordinateur";
    }
}

window.addEventListener("resize", adapterLayout);

adapterLayout();
