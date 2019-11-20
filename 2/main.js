// Richiediamo 2 stringhe all'utentemediante prompt
var primastringa = prompt('Inserisci la prima stringa');
var secondastringa = prompt('Inserisci la seconda stringa');


// Confrontiamo le lunghezze delle stringhe
if (primastringa.length == secondastringa.length) {
    alert('Le stringhe inserite hanno la stessa lunghezza')
} else if (primastringa.length < secondastringa.length) {
    alert('La stringa più corta che hai inserito è: ' + primastringa);
    alert('La stringa più lunga che hai inserito è: ' + secondastringa);
} else {
    alert('La stringa più corta che hai inserito è: ' + secondastringa);
    alert('La stringa più lunga che hai inserito è: ' + primastringa);
}
