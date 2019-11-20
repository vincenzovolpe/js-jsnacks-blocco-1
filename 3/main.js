// Richiediamo all'utente di inserire un numero per 5 volte esommare i numeri iseriti

var numero = [];
var somma = 0;

// Versione con il for
/*for (var i = 0; i <= 4; i++) {
    numero[i] = parseInt(prompt('Inserisci il ' + (i + 1) + ' ° numero'));
    somma = somma + numero[i];
}
console.log(numero);
alert('La somma dei numeri inseriti è: ' + somma);
*/


// Versione con il while
var i = 0;
while (i <= 4) {
    numero[i] = parseInt(prompt('Inserisci il ' + (i + 1) + ' ° numero'));
    somma = somma + numero[i];
    i++;
}
console.log(numero);
alert('La somma dei numeri inseriti è: ' + somma);
