
let bouton = document.getElementById("bouton");

if (localStorage.getItem("theme") === "sombre") {
    document.body.classList.add("sombre");
    bouton.textContent = "Mode clair";
}

function changerTheme() {
    document.body.classList.toggle("sombre");

    if (document.body.classList.contains("sombre")) {
        localStorage.setItem("theme", "sombre");
        bouton.textContent = "Mode clair";
    } else {
        localStorage.setItem("theme", "clair");
        bouton.textContent = "Mode sombre";
    }
}
