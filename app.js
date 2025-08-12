// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
//crea un nuevo elemento en este caso una etiqueta <li> para agregar los nombres que se ingresen
function asignarelemento(etiqueta,texto){
    let elementoHTML = document.querySelector(etiqueta);
    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = texto;
    elementoHTML.appendChild(nuevoElemento);
    return;
}

//agregar en una lista los participantes
function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;

    if(nombreAmigo == ""){
        alert("favor de escribir un nombre");
    }else{
        listaAmigos.push(nombreAmigo);
        asignarelemento('#listaAmigos',nombreAmigo);

    }
    limpiarInput();
    
    return;
}

//funcion para sortear
function sortearAmigo(){
    if(listaAmigos.length == 1 ){
        alert("debes agregar a otro amigo para poder sortearlo");
        return;
    }
    if(listaAmigos.length == 0){
        alert("necesitas agregar un nombre")
        return;
    }

    
    let sortear = Math.floor(Math.random() * listaAmigos.length);
    let nombreElegido = listaAmigos[sortear];

    
    let resultado = document.getElementById("resultado");
    resultado.textContent = `El amigo sorteado es: ${nombreElegido}`;
    document.querySelector('#listaAmigos').innerHTML="";

}

//cada que se agrega una persona queda vacio para poder agregar un valor
//el cursor queda en el input activo para poder agregar un valor
function limpiarInput(){
    document.getElementById('amigo').value = "";
    document.getElementById('amigo').focus();
    return;
}
