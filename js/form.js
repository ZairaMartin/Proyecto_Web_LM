// Agrega un event listener para el evento 'submit' del formulario con el id 'myForm'
document.getElementById('miFormulario').addEventListener('submit', function(event) {
    // Evita el comportamiento por defecto del formulario (que recarga la página)
    event.preventDefault();

    // Crea un nuevo FormData con los datos del formulario actual
    const formData = new FormData(this);

    // Convierte el FormData a un objeto
    const data = Object.fromEntries(formData.entries());

    // Convierte el objeto a una cadena JSON, con una indentación de 2 espacios para legibilidad
    const jsonData = JSON.stringify(data, null, 2);

    // Crea un Blob con el JSON, especificando que el tipo de contenido es 'application/json'
    const blob = new Blob([jsonData], { type: 'application/json' });

    // Crea una URL para el Blob
    const url = URL.createObjectURL(blob);

    // Crea un elemento de ancla (enlace)
    const a = document.createElement('a');

    // Establece la URL del enlace al Blob creado
    a.href = url;

    // Establece el atributo de descarga con el nombre del archivo 'salida.json'
    a.download = 'salida.json';

    // Añade el enlace al cuerpo del documento
    document.body.appendChild(a);

    // Simula un clic en el enlace para iniciar la descarga del archivo
    a.click();

    // Remueve el enlace del documento
    document.body.removeChild(a);
});
