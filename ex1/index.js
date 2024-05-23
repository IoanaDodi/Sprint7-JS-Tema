function get_sum(numere) {
    let get_sum = 0;

    for (let i = 0; i < numere.length; i++) {
        get_sum += numere[i];
    }

    return get_sum;
}

let numere = [3, 16, 98, 11, 6, 97];
// let numere = [0.05, 48.69, -52, 153, -146.46]
const total = get_sum(numere);
console.log("Suma numerelor este: " + total);