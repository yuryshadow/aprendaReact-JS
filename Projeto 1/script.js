var nome = '';

if ( typeof localStorage.nome == 'null'){
    localStorage.nome = prompt("Digite seu nome?");
}


nome = localStorage.nome;

document.getElementById('nome').innerHTML = nome;