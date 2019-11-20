// Chiediamo un numero all'utente
var numero = parseInt(prompt('Inserisci un numero'));

// Calcoliamo il cubo dei primi n numeri dove n è il numero indicato dall'utente
for (var i = 0; i < numero; i++) {
    cubo = Math.pow(i+1,3);
    console.log(cubo);
}
