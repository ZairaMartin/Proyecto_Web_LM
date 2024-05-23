'use strict';
function random_image(){
    //ceramos una variable de array con cada elemento que queremos mostrar al pulsar al boton
    var imagenes = [
        {
            src:'./img/menus/menu 1.jpg',
            descripcion:"Menu de Boda. Medallon de solomillo a las finas hierbas."
        },{
            src:'./img/menus/Menu 2.jpg',
            descripcion:"Menu de Bautizo. Tartas de Salmon y bocados del mar."
        },{
            src:'./img/menus/menu 3.jpg',
            descripcion:"Menu de Comunion. Tosta de torta del casar con tomates deshidratados."
        },{
            src:'./img/menus/menu 4.jpg',
            descripcion:"Menu de Cumpleaños. Fajita de secreto ibérico macerado, con guacamole de la casa."
        },{
            src:'./img/menus/menu 5.jpg',
            descripcion:"Menu de Navidad. Pavo al horno con guarnicion navideña."
        },{
            src:'./img/menus/menu 6.jpg',
            descripcion:"Menu de Eventos. Sushi casero y con productos de temporada."
        }
    ];
    //variable aleatoria entre 0 y la longitud del array
    var ale = Math.floor(Math.random() * imagenes.length);
    var imagenAleatoria = imagenes[ale].src;
    var descripcionImagen = imagenes[ale].descripcion;

    //metemos la info por el get element con las IDs
    var imagenElemento = document.getElementById('imagen');
    imagenElemento.src = imagenAleatoria;

    var descripcionElemento = document.getElementById('descripcion');
    descripcionElemento.textContent = descripcionImagen;
}
