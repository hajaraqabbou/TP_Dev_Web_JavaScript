const reponses = {
    q1: ["a"],
    q2: ["b"],
    q3: ["a", "b"],
    q4: ["a", "b"],
    q5: ["a", "b"]
};

function recupererReponses(numero) {
    let elements = document.querySelectorAll(
        'input[name="q' + numero + '"]:checked'
    );

    let choix = [];

    for (let i = 0; i < elements.length; i++) {
        choix.push(elements[i].value);
    }

    return choix.sort();
}

function verifierReponse(numero) {
    let choix = recupererReponses(numero);
    let correction = reponses["q" + numero];

    return JSON.stringify(choix) === JSON.stringify(correction);
}

function afficherResultat() {
    let contenu = "<h2>Résultat du QCM</h2>";
    let note = 0;

    for (let i = 1; i <= 5; i++) {
        if (verifierReponse(i)) {
            contenu += "<p>Question " + i + " : correcte</p>";
            note++;
        } else {
            contenu += "<p>Question " + i + " : incorrecte</p>";
        }
    }

    contenu += "<h3>Note : " + note + "/5</h3>";

    ouvrirFenetre(contenu);
}

function afficherCorrige() {
    let contenu = "<h2>Corrigé du QCM</h2>";

    let questions = document.querySelectorAll("#qcm h3");

    for (let i = 1; i <= 5; i++) {
        contenu += "<h3>" + questions[i - 1].textContent + "</h3>";

        let elements = document.querySelectorAll(
            'input[name="q' + i + '"]'
        );

        for (let j = 0; j < elements.length; j++) {
            let element = elements[j];
            let texte = element.parentElement.textContent.trim();

            if (reponses["q" + i].includes(element.value)) {
                contenu += '<p style="color:green;text-decoration:underline;">'
                         + texte + "</p>";
            } else {
                contenu += "<p>" + texte + "</p>";
            }
        }
    }

    ouvrirFenetre(contenu);
}

function ouvrirFenetre(contenu) {
    let fenetre = window.open(
        "",
        "_blank",
        "width=650,height=550,scrollbars=yes,resizable=yes"
    );

    if (fenetre === null) {
        alert("Veuillez autoriser les fenêtres pop-up.");
        return;
    }

    fenetre.document.write(
        "<!DOCTYPE html><html><head><title>QCM</title></head><body>"
        + contenu +
        "</body></html>"
    );

    fenetre.document.close();

    fenetre.addEventListener("load", function () {
        let largeur = fenetre.document.body.scrollWidth + 50;
        let hauteur = fenetre.document.body.scrollHeight + 90;

        fenetre.resizeTo(
            Math.min(largeur, 900),
            Math.min(hauteur, 800)
        );
    });
}