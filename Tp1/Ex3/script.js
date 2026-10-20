function trier(tableau) {
    return tableau.sort(function(a, b) {
        return a - b;
    });
}

let nombres = [12, 5, 20, 3];

console.log(trier(nombres));