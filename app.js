
let amigos = [];

function adicionarAmigo() {

    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();
    

    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado!');
        inputAmigo.value = '';
        return;
    }
    
    amigos.push(nomeAmigo);
    inputAmigo.value = '';
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<li>🎉 O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>! 🎉</li>`;
}

function configurarEventos() {
    const inputAmigo = document.getElementById('amigo');
    
    inputAmigo.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            adicionarAmigo();
        }
    });
}

document.addEventListener('DOMContentLoaded', configurarEventos);

function limparLista() {
    amigos = [];
    atualizarListaAmigos();
    document.getElementById('resultado').innerHTML = '';
}