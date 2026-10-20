
let intervalle;

function demarrer() {
    let progression = document.getElementById("progression");
    let bouton = document.getElementById("bouton");

    clearInterval(intervalle);

    let pourcentage = 0;
    progression.style.width = "0%";
    progression.textContent = "0%";
    bouton.disabled = true;

    intervalle = setInterval(function() {
        pourcentage++;

        progression.style.width = pourcentage + "%";
        progression.textContent = pourcentage + "%";

        if (pourcentage >= 100) {
            clearInterval(intervalle);
            bouton.disabled = false;
        }
    }, 50);
}
