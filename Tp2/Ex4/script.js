
let ecran = document.getElementById("ecran");

function ajouter(valeur) {
    ecran.value += valeur;
}

function effacer() {
    ecran.value = "";
}

function supprimer() {
    ecran.value = ecran.value.slice(0, -1);
}

function calculer() {
    let expression = ecran.value;

    if (!/^\d+(\.\d+)?([+\-*/]\d+(\.\d+)?)*$/.test(expression)) {
        ecran.value = "Erreur";
        return;
    }

    let nombres = expression.split(/[+\-*/]/).map(Number);
    let operations = expression.match(/[+\-*/]/g) || [];

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "*" || operations[i] === "/") {
            if (operations[i] === "/" && nombres[i + 1] === 0) {
                ecran.value = "Erreur";
                return;
            }

            let resultat = operations[i] === "*"
                ? nombres[i] * nombres[i + 1]
                : nombres[i] / nombres[i + 1];

            nombres.splice(i, 2, resultat);
            operations.splice(i, 1);
            i--;
        }
    }

    let resultat = nombres[0];

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "+") {
            resultat += nombres[i + 1];
        } else {
            resultat -= nombres[i + 1];
        }
    }

    ecran.value = Number.isFinite(resultat) ? resultat : "Erreur";
}
