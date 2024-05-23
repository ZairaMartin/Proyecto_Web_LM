'use strict';

document.addEventListener('DOMContentLoaded', function() {
    // Referencia al botón y al contenedor del chiste
    const btnObtenerChiste = document.getElementById('obtenerChiste');
    const divChiste = document.getElementById('chiste');

    // Añadir evento al botón
    btnObtenerChiste.addEventListener('click', function() {
        // URL de la API
        const apiURL = 'https://api.chucknorris.io/jokes/random';

        // Hacer una solicitud GET a la API
        fetch(apiURL)
            .then(response => {
                // Verificar si la respuesta es exitosa
                if (!response.ok) {
                    throw new Error('Error en la solicitud: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                // Procesar los datos recibidos
                console.log(data);
                mostrarChiste(data);
            })
            .catch(error => {
                // Manejar errores
                console.error('Error al obtener el chiste: ', error);
                divChiste.textContent = 'Hubo un error al obtener el chiste. Inténtalo de nuevo más tarde.';
            });
    });

    // Función para mostrar el chiste en la página
    function mostrarChiste(chisteData) {
        divChiste.textContent = chisteData.value;
    }
});




