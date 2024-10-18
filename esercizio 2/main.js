// Testo:
// Pari e Dispari
//
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Dichiarazione variabili
let userType, userNumber;

// L'utente sceglie pari o dispari
userType = prompt("Scegli pari o dispari?").toLowerCase();
while (userType != "pari" && userType != "dispari") {
    userType = prompt(
        "L'input è errato! \nScegli pari o dispari?"
    ).toLowerCase();
}
// L'utente sceglie un numero
userNumber = parseInt(prompt("Inserisci un numero tra 1 e 5:"));
while (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
    userNumber = parseInt(
        prompt("L'input è errato! \nInserisci un numero tra 1 e 5:")
    );
}

// Genero un numero per il computer
let pcNumber = randomNumber(5);

// Sommo il numero dell'utente e il numero del computer
let sum = userNumber + pcNumber;
console.log("Somma: " + sum);

// Informo l'utente dei calcoli
alert(`Hai scelto: ${userType}
Il tuo numero è: ${userNumber}.
Il numero del computer è: ${pcNumber}.

La somma è: ${sum}!`);

// Controllo i risultati
if (oddOrEven(sum) === userType) {
    alert("HAI VINTO!!!");
} else {
    alert("HAI PERSO...");
}

// Funzione per generare un numero random
function randomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

// Funzione per controllare se un numero è pari o dispari
function oddOrEven(n) {
    if (n % 2 === 0) {
        return "pari"; // Ritorna "pari" in italiano
    } else {
        return "dispari"; // Ritorna "dispari" in italiano
    }
}
