// Elementos del DOM
const botonEnviar = document.getElementById("boton-enviar");
const botonReset = document.getElementById("boton-reset");
const textoGracias = document.getElementById("texto-gracias");
const filasFormulario = document.getElementsByClassName("filas-formulario");
const inputFecha = document.getElementById("fecha");
const parrafoFecha = document.getElementById("texto-fecha");

// Escuchadores de eventos
botonEnviar.addEventListener("click", () => {
    textoGracias.innerText = "Tu mensaje fue enviado. Gracias por contactarnos";
});

botonReset.addEventListener("click", (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto si el botón está en un formulario
    location.reload(); // Recargar la página
});

// Conjunto de caracteres no permitidos
const caracteresNoPermitidos = new Set(['@', '#', '$', '%']);

Array.from(filasFormulario).forEach(elemento => {
    elemento.addEventListener("keydown", (evento) => {
        if (caracteresNoPermitidos.has(evento.key)) {
            evento.preventDefault(); // Evita que el carácter sea ingresado
            textoGracias.innerText = "Los caracteres @, #, $ y % no se encuentran permitidos, por favor, borralos";
        } else {
            textoGracias.innerText = ""; // Limpia el mensaje de error si el carácter es permitido
        }
    });
});

inputFecha.addEventListener("change", (evento) => {
    const textoFecha = evento.target.value; 
    parrafoFecha.innerText = armarElTextoDeLaFecha(textoFecha);
});

function armarElTextoDeLaFecha(textoFecha) {
    const [numeroAnio, numeroMes, numeroDia] = textoFecha.split("-");
    
    const meses = {
        '01': 'Enero',
        '02': 'Febrero',
        '03': 'Marzo',
        '04': 'Abril',
        '05': 'Mayo',
        '06': 'Junio',
        '07': 'Julio',
        '08': 'Agosto',
        '09': 'Septiembre',
        '10': 'Octubre',
        '11': 'Noviembre',
        '12': 'Diciembre'
    };

    const mes = meses[numeroMes] || 'Mes desconocido'; 

    return `Fecha: ${numeroDia} de ${mes} del ${numeroAnio}`;
}
