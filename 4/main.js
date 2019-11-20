// Creo una lista di invitati
var invitati = ['tizio', 'caio', 'sempronio', 'tale', 'cesare'];

// Chiedo il nome all'utente
var nomeutente = prompt('Inserisci il tuo nome');

//Ricerco il nome dell'utente è comunico se è tra gli invitati o meno
if (invitati.includes(nomeutente.toLowerCase())) {
    alert('Sei stato invitato alla festa');
} else {
    alert('Ci dispiace ma non sei stato invitato all festa');
}
