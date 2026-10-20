function verifierEmail() {
    let email = document.getElementById("email").value.trim();
    let resultat = document.getElementById("resultat");

    let posAro = email.indexOf("@");
    let posPoint = email.indexOf(".", posAro + 1);

    if (
        posAro >= 1 &&
        posPoint > posAro + 1 &&
        posPoint < email.length - 1
    ) {
        resultat.textContent = "Adresse email valide";
        resultat.style.color = "green";
    } else {
        resultat.textContent = "Adresse email invalide";
        resultat.style.color = "red";
    }
}