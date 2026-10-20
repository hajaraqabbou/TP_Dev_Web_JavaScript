
let images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg"
];

let position = 0;

function afficherImage() {
    document.getElementById("image").src = images[position];
}

function suivant() {
    position++;

    if (position >= images.length) {
        position = 0;
    }

    afficherImage();
}

function precedent() {
    position--;

    if (position < 0) {
        position = images.length - 1;
    }

    afficherImage();
}
