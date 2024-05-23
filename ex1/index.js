function suma(numere) {
    let suma = 0;

    for (let i = 0; i < numere.length; i++) {
        suma += numere[i];
    }

    return suma;
}

let numere = [3, 16, 98, 11, 6, 97];
// let numere = [0.05, 48.69, -52, 153, -146.46]
const total = suma(numere);
console.log("Suma numerelor este: " + total );