// Richiediamo 2 numeri all'utente mediante prompt
var primo = parseInt(prompt('Inserisci il primo numero'));
var secondo = parseInt(prompt('Inserisci il primo numero'));

//Confronto i due numeri e stampo il maggiore
var maggiore = '';
if (primo > secondo) {
    maggiore = primo;
} else if (primo < secondo) {
    maggiore = secondo;
} else {
    alert('I due numeri inseriti sono uguali')
}
if (maggiore != ''){
    alert('Il maggiore è ' + maggiore);
}
