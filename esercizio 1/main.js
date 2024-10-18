// Testo:
// Palidroma
//
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

// Chiedo all'utente una parola
const userWord = prompt("Inserisci una parola: ");

// Controllo se la parola inserita è un palindromo
const isUserWordPalindromo = isPalindromo(userWord);

// Output
alert(
    isUserWordPalindromo
        ? `La parola è un palindromo!`
        : `La parola NON è un palindromo`
);

/**
 * Data una stringa, controlla se palindroma.
 *
 * @param {String} word parola da controllare
 * @returns {Boolean} ritorna true se è un palindromo
 */
function isPalindromo(word) {
    // Qualunque sia il tipo di word, diventa String
    let str = word.toString();

    // Ritorno true se palindromo, altrimenti false
    return str === str.split("").reverse().join("") ? true : false;
}
