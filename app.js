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

//agre
function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;

    if(nombreAmigo == ""){
        alert("favor de escribir un nombre");
    }else{
        listaAmigos.push(nombreAmigo);
        asignarelemento('#listaAmigos',nombreAmigo);

    }
    limpiarInput();
    console.log(listaAmigos);
    return;
}


function sortearAmigo(){

}


function limpiarInput(){
    document.getElementById('amigo').value = "";
    document.getElementById('amigo').focus();
    return;
}


console.log(listaAmigos);