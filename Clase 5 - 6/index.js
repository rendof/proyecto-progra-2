//caso 1
let nombre = 'ale';

localStorage.setItem('usuario  ', nombre);
console.log (localStorage)

//Caso 2 -> guardar datos complejos caso array
let listaDeProfesores = ['Ale', 'Gonza'];
//Transofrmamos el array en cadena de texto JSON
listaDeProfesores = JSON.stringify(listaDeProfesores);
//Guardamos el json en localStorage
localStorage.setItem('profesores', listaDeProfesores)
console.log (localStorage)

//Recuperar datos de localStorage
let recuperoLista = localStorage.getItem('profesores');
//Transformo la cadena de texto nuevamente en array
recuperoLista = JSON.parse(recuperoLista)

console.log(recuperoLista)

let lista = document.querySelector('.lista')

recuperoLista.forEach(profesor => {
    lista.innerHTML += '<li>' + profesor + '</li>'
});