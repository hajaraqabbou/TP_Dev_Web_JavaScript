
let formulaire = document.getElementById("formulaire");

formulaire.addEventListener("submit", function(event) {
    event.preventDefault();

    let nom = document.getElementById("nom").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message");

    if (nom === "" || email === "") {
        message.textContent = "Veuillez remplir tous les champs.";
        message.style.color = "red";
    } else {
        message.textContent = "Formulaire validé avec succès !";
        message.style.color = "green";
    }
});
