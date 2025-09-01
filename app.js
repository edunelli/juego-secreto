// inicio del proyecto
let valor = "";
let amigosAgregados = [];

// funcion para agregar amigos

function agregarAmigo(nombre){
    let inputAmigo = document.getElementById('amigo');
    if (inputAmigo.value == "") {
        alert("Debe ingresar un nombre");
    } else {
        valor = inputAmigo.value;
        amigosAgregados.push(valor);
        console.log(amigosAgregados);
        agregarLista(amigosAgregados);
        document.getElementById('amigo').value = "";
    }
    return amigosAgregados;
}

// funcion para agregar la lista de amigos al html

function agregarLista(lista) {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    for (let i = 0; i < lista.length; i++) {
        listaAmigos.innerHTML += `<li>${lista[i]}</li>`;
    }
}

// funcion para agregar amigos

function sortearAmigo() {
    let numeroAleatorio = 0;
    if (amigosAgregados.length != 0){
        numeroAleatorio = Math.floor(Math.random()* amigosAgregados.length);// genera numero aleatorio, en base a el largo de la lista
        let resultado = document.getElementById('resultado')
        resultado.innerHTML = `<li>${amigosAgregados[numeroAleatorio]}</li>`;// crea el elemento lista con el amigo sorteado
    } else {
        alert("Debe ingresar al menos un amigo");
    }
}
