function verifierEmail() {
    let email = document.getElementById("email").value;

    let posAt = email.indexOf("@");
    let posPoint = email.indexOf(".", posAt + 1);

    if (
        posAt >= 1 &&
        posPoint > posAt &&
        posPoint < email.length - 1
    ) {
        document.getElementById("resultat").textContent =
            "Email valide";
    } else {
        document.getElementById("resultat").textContent =
            "Email invalide";
    }
}