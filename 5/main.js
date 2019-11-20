// Creiamo un array vuoto
var numeri = [];
// Chiediamo all'utente di inserire 6 numeri e stampiamo solo i dispari
for (var i = 0; i <= 5; i++) {
    numeroutente = parseInt(prompt('Inserisci il ' + (i + 1) + ' ° numero'))
    console.log(numeroutente);
    if (numeroutente % 2 != 0) {
        numeri.push(numeroutente)
    }
}
console.log(numeri);
alert('I valori dispari sono: ' + numeri);
