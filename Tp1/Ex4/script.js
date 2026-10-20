
function calculerSomme() {
    let total = 0;

    for (let i = 1; i <= 3; i++) {
        let h = Number(document.getElementById("h" + i).value);
        let m = Number(document.getElementById("m" + i).value);
        let s = Number(document.getElementById("s" + i).value);

        if (!Number.isInteger(h) || !Number.isInteger(m) ||
            !Number.isInteger(s) || h < 0 || m < 0 || s < 0) {
            alert("Veuillez entrer des durées valides.");
            return;
        }

        total += h * 3600 + m * 60 + s;
    }

    let jours = Math.floor(total / 86400);
    total = total % 86400;

    let heures = Math.floor(total / 3600);
    total = total % 3600;

    let minutes = Math.floor(total / 60);
    let secondes = total % 60;

    document.getElementById("jours").value = jours;
    document.getElementById("heures").value = heures;
    document.getElementById("minutes").value = minutes;
    document.getElementById("secondes").value = secondes;
}
