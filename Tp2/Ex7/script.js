
let debut = Date.now();

function actualiserTimer() {
    let secondes = Math.floor((Date.now() - debut) / 1000);

    document.getElementById("timer").textContent =
        "Temps écoulé : " + secondes + " secondes";
}

setInterval(actualiserTimer, 1000);
