function vocale(litere) {
    let numarVocale=0;

    for (let i=0; i < litere.length; i++) {
        if (litere[i] === 'a' || litere[i] === 'e' || litere[i] === 'i' || litere[i] === 'o' || litere[i] === 'u') {
            numarVocale++;
        }
    }
    return numarVocale;
}

const paragraf = "oare cate vocale sunt in acest paragraf?";
const nrvocale = vocale(paragraf);

console.log("In acest paragraf sunt: " + nrvocale + " vocale");