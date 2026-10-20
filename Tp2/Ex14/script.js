
let elements = document.querySelectorAll(".element");
let zones = document.querySelectorAll(".zone");

elements.forEach(function(element) {
    element.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("text/plain", element.id);
    });
});

zones.forEach(function(zone) {
    zone.addEventListener("dragover", function(event) {
        event.preventDefault();
    });

    zone.addEventListener("drop", function(event) {
        event.preventDefault();

        let id = event.dataTransfer.getData("text/plain");
        let element = document.getElementById(id);

        if (element) {
            zone.appendChild(element);
        }
    });
});
