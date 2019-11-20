// Richiedo  un numero all'utente
var numero = prompt('Inserisci un numero di 4 cifre: ');

// Creo un array con le cifre del numero inserito
cifre = numero.split("");
console.log(cifre);
// Converto  gli elementi dell'array da stringhe a numeri
cifrereali = cifre.map(Number);
console.log(cifrereali);

// Creo un ciclo per sommare i numeri presenti nell'array
var somma = 0;
for (var i = 0; i < cifrereali.length; i++) {
    somma = somma + cifrereali[i];
}
console.log('La somma delle cifre del numero inserito è: ' +somma);
