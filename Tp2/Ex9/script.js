
function ajouterTache() {
    let champ = document.getElementById("tache");
    let texte = champ.value.trim();

    if (texte === "") {
        alert("Veuillez saisir une tâche.");
        return;
    }

    let liste = document.getElementById("liste");

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = texte;

    let boutonFait = document.createElement("button");
    boutonFait.textContent = "Fait";

    boutonFait.onclick = function() {
        span.classList.toggle("terminee");
    };

    let boutonSupprimer = document.createElement("button");
    boutonSupprimer.textContent = "Supprimer";

    boutonSupprimer.onclick = function() {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(boutonFait);
    li.appendChild(boutonSupprimer);

    liste.appendChild(li);

    champ.value = "";
}
