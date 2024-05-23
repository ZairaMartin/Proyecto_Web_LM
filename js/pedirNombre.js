'use strict';
function nombre(){
    var mi_nombre = prompt("Introduce tu nombre: ");
    var textnode = document.createTextNode(mi_nombre);

    document.getElementById('parrafo_nombre').appendChild(textnode);

}
