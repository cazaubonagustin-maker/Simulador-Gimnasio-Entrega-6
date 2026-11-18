// Clase para representar los entrenamientos del gimnasio
class Entrenamiento {
    constructor(id, ejercicio, minutos, estado) {
        this.id = id;
        this.ejercicio = ejercicio;
        this.minutos = minutos;
        this.estado = estado;
    }
    completar() {
    this.estado = "Completado";
    console.log("El entrenamiento de " + this.ejercicio +
        " fue completado.");
}
}
function saludarUsuario(nombre) {
    alert("¡Bienvenido al Simulador de Gimnasio, " + nombre + "!");
}


let nombreUsuario = prompt("¿Cómo te llamás?");

if (nombreUsuario === null || nombreUsuario.trim() === "") {
    nombreUsuario = "Usuario";
}
saludarUsuario(nombreUsuario);
function sumarMinutos(totalActual, minutosNuevos) {
    return totalActual + minutosNuevos;
}

let minutosTotales = 0;
let cantidadEntrenamientos = 0;

// Guardamos los entrenamientos registrados por el usuario
const entrenamientosRegistrados = [];

let continuar = "si";

while (continuar === "si") {
// Preguntamos qué ejercicio realizó el usuario
const respuestaEjercicio = prompt("¿Qué ejercicio realizaste?");
// Validamos el nombre del ejercicio
if (respuestaEjercicio === null) {
    alert("Finalizaste el registro de entrenamientos.");
    break;
}

const nombreEjercicio = respuestaEjercicio.trim();

if (nombreEjercicio === "") {
    alert("Ingresaste un nombre de ejercicio inválido.");
    continue;
}
const respuestaMinutos = prompt("¿Cuántos minutos entrenaste?");

if (respuestaMinutos === null) {
    alert("Finalizaste el registro de entrenamientos.");
    break;
}

const minutosIngresados = Number(respuestaMinutos);

    
if (Number.isFinite(minutosIngresados) && minutosIngresados > 0) {
minutosTotales = sumarMinutos(minutosTotales, minutosIngresados);
    cantidadEntrenamientos++;
    // Creamos un objeto con los minutos registrados
const nuevoEntrenamiento = new Entrenamiento(
    cantidadEntrenamientos,
    nombreEjercicio,
    minutosIngresados,
    "Pendiente"
);

// Guardamos el objeto en nuestro array
entrenamientosRegistrados.push(nuevoEntrenamiento);

    alert("Entrenamiento registrado correctamente.");
} 
   else {
        alert("Ingresaste una cantidad de minutos inválida.");
    }

    
do {
    continuar = prompt("¿Querés registrar otro entrenamiento? Escribí si o no.");

    if (continuar === null) {
        continuar = "no";
    } else {
        continuar = continuar.toLowerCase().trim().replace("í", "i");
    }

    if (continuar !== "si" && continuar !== "no") {
        alert("Respuesta inválida. Escribí si o no.");
    }

} while (continuar !== "si" && continuar !== "no");
}
const convertirAHoras = (minutos) => {
    return minutos / 60;
};

const horasEntrenadas = convertirAHoras(minutosTotales);

function mostrarResumen(cantidad, minutos, horas) {
    const palabraEntrenamiento = cantidad === 1 ? "entrenamiento" : "entrenamientos";
    const palabraHora = horas === 1 ? "hora" : "horas";

    const mensaje = "Registraste " + cantidad + " " +
        palabraEntrenamiento + ", con un total de " +
        minutos + " minutos, equivalentes a " +
        horas + " " + palabraHora + ".";

    alert(mensaje);
    console.log(mensaje);
}
mostrarResumen(cantidadEntrenamientos, minutosTotales, horasEntrenadas);


// Lista de ejercicios disponibles en nuestro gimnasio
const ejercicios = [
    "Sentadillas",
    "Flexiones",
    "Abdominales",
    "Dominadas",
    "Plancha"
];
// Agregamos un ejercicio al final de la lista
ejercicios.push("Burpees");

console.log("Ejercicios después de agregar Burpees:", ejercicios);

// Agregamos un ejercicio prioritario al principio de la lista
ejercicios.unshift("Calentamiento");

console.log("Ejercicios después de agregar Calentamiento:", ejercicios);

// Eliminamos el último ejercicio de la lista
const ejercicioEliminado = ejercicios.pop();

// Buscamos un ejercicio dentro de la lista
const respuestaBusqueda = prompt("¿Qué ejercicio querés buscar?");
const ejercicioBuscado = respuestaBusqueda === null ? "" : respuestaBusqueda.trim();

const ejerciciosMinusculas = ejercicios.map(ejercicio => ejercicio.toLowerCase());
const busquedaMinusculas = ejercicioBuscado.toLowerCase();

if (ejerciciosMinusculas.includes(busquedaMinusculas)) {
    const posicion = ejerciciosMinusculas.indexOf(busquedaMinusculas);

    console.log("El ejercicio " + ejercicios[posicion] +
        " está en la posición " + posicion + ".");
} else if (ejercicioBuscado === "") {
    console.log("No ingresaste ningún ejercicio para buscar.");
} else {
    console.log("El ejercicio " + ejercicioBuscado +
        " no está en la lista.");
}

console.log("Se ha eliminado el elemento: " + ejercicioEliminado);

// Reemplazamos un ejercicio utilizando su índice
ejercicios.splice(3, 1, "Estocadas");

console.log("Ejercicios después del reemplazo:", ejercicios);

// Función para mostrar todos los ejercicios del gimnasio
function mostrarEjercicios(lista) {
    console.log("--- LISTA DE EJERCICIOS DEL GIMNASIO ---");

    for (const ejercicio of lista) {
        console.log("Ejercicio: " + ejercicio);
    }

    console.log("Total de ejercicios: " + lista.length);
}

mostrarEjercicios(ejercicios);




// Creamos tres entrenamientos utilizando nuestra clase
const entrenamiento1 = new Entrenamiento(1, "Sentadillas", 30, "Pendiente");
const entrenamiento2 = new Entrenamiento(2, "Flexiones", 20, "Pendiente");
const entrenamiento3 = new Entrenamiento(3, "Plancha", 15, "Pendiente");
// Mostramos el estado inicial de los entrenamientos
console.log("--- ESTADO INICIAL DE LOS ENTRENAMIENTOS ---");
console.log(entrenamiento1);
console.log(entrenamiento2);
console.log(entrenamiento3);

// Completamos dos entrenamientos
entrenamiento1.completar();
entrenamiento2.completar();

// Mostramos el estado final de los entrenamientos
console.log("--- ESTADO FINAL DE LOS ENTRENAMIENTOS ---");
console.log(entrenamiento1);
console.log(entrenamiento2);
console.log(entrenamiento3);
// Guardamos los entrenamientos en un array
const entrenamientos = [
    entrenamiento1,
    entrenamiento2,
    entrenamiento3
];

// Recorremos los entrenamientos y mostramos su información
console.log("--- RESUMEN DE ENTRENAMIENTOS ---");

for (const entrenamiento of entrenamientos) {
    console.log(
        "Ejercicio: " + entrenamiento.ejercicio +
        " | Duración: " + entrenamiento.minutos + " minutos" +
        " | Estado: " + entrenamiento.estado
    );
}
// Mostramos los entrenamientos registrados por el usuario
function mostrarEntrenamientosRegistrados(lista) {
    console.log("--- ENTRENAMIENTOS REGISTRADOS POR EL USUARIO ---");

    for (const entrenamiento of lista) {
        console.log(
            "ID: " + entrenamiento.id +
            " | Ejercicio: " + entrenamiento.ejercicio +
            " | Minutos: " + entrenamiento.minutos +
            " | Estado: " + entrenamiento.estado
        );
    }

    console.log("Total de entrenamientos registrados: " + lista.length);
}

mostrarEntrenamientosRegistrados(entrenamientosRegistrados);
// Completamos el primer entrenamiento registrado por el usuario
if (entrenamientosRegistrados.length > 0) {
    entrenamientosRegistrados[0].completar();

    console.log("--- PRIMER ENTRENAMIENTO ACTUALIZADO ---");
    console.log(entrenamientosRegistrados[0]);
}
// PRE-ENTREGA 6: Menú de funciones de orden superior
// Buscar un entrenamiento por su ID
function buscarEntrenamientoPorId(id) {
    return entrenamientosRegistrados.find(
        entrenamiento => entrenamiento.id === id
    );
}

// Filtrar entrenamientos según su duración
function filtrarEntrenamientosPorDuracion(minutosMinimos) {
    return entrenamientosRegistrados.filter(
        entrenamiento => entrenamiento.minutos >= minutosMinimos
    );
}

 // Calcular los minutos totales de los entrenamientos
function calcularMinutosTotales() {
    return entrenamientosRegistrados.reduce(
        (total, entrenamiento) => total + entrenamiento.minutos,
        0
    );
}

 // Obtener los nombres de los ejercicios registrados
function obtenerNombresEjercicios() {
    return entrenamientosRegistrados.map(
        entrenamiento => entrenamiento.ejercicio
    );
}


function mostrarMenuEntrenamientos() {
    return prompt(
        "MENÚ DE ENTRENAMIENTOS\n" +
        "1. Buscar entrenamiento por ID\n" +
        "2. Filtrar entrenamientos por duración\n" +
        "3. Calcular minutos totales\n" +
        "4. Mostrar nombres de ejercicios\n" +
        "5. Salir\n\n" +
        "Elegí una opción del 1 al 5:"
    );
}
// Ejecutamos el menú de entrenamientos
let opcionMenu = "";

do {
    opcionMenu = mostrarMenuEntrenamientos();

    if (opcionMenu === null || opcionMenu === "5") {
        alert("Saliste del menú de entrenamientos.");
        break;
    }

    switch (opcionMenu) {
        case "1": {
    const respuestaId = prompt("Ingresá el ID del entrenamiento que querés buscar:");

    if (respuestaId === null) {
        alert("Búsqueda cancelada.");
        break;
    }

    const idBuscado = Number(respuestaId);

    if (!Number.isInteger(idBuscado) || idBuscado <= 0) {
        alert("Ingresá un ID válido.");
        break;
    }

    const entrenamientoEncontrado = buscarEntrenamientoPorId(idBuscado);



    if (entrenamientoEncontrado) {
        console.log("Entrenamiento encontrado:", entrenamientoEncontrado);

        alert(
            "Entrenamiento encontrado:\n" +
            "ID: " + entrenamientoEncontrado.id + "\n" +
            "Ejercicio: " + entrenamientoEncontrado.ejercicio + "\n" +
            "Minutos: " + entrenamientoEncontrado.minutos + "\n" +
            "Estado: " + entrenamientoEncontrado.estado
        );
    } else {
        alert("No se encontró ningún entrenamiento con ese ID.");
    }

    break;
}

        
case "2": {
    const respuestaMinutos = prompt(
        "¿Cuántos minutos como mínimo debe durar el entrenamiento?"
    );

    if (respuestaMinutos === null) {
        alert("Filtro cancelado.");
        break;
    }

    const minutosMinimos = Number(respuestaMinutos);

    if (
        respuestaMinutos.trim() === "" ||
        !Number.isFinite(minutosMinimos) ||
        minutosMinimos <= 0
    ) {
        alert("Ingresá una cantidad de minutos válida.");
        break;
    }

    const entrenamientosFiltrados =
        filtrarEntrenamientosPorDuracion(minutosMinimos);

    if (entrenamientosFiltrados.length > 0) {
        console.log("Entrenamientos filtrados por duración:", entrenamientosFiltrados);

        let mensaje = "Entrenamientos encontrados:\n";

        for (const entrenamiento of entrenamientosFiltrados) {
            mensaje +=
                "\n" + entrenamiento.ejercicio +
                " - " + entrenamiento.minutos + " minutos";
        }

        alert(mensaje);
    } else {
        alert("No hay entrenamientos con esa duración mínima.");
    }

    break;
}


case "3": {
    const totalMinutos = calcularMinutosTotales();

    console.log("Total de minutos entrenados:", totalMinutos);

    alert(
        "RESUMEN DE ENTRENAMIENTOS\n" +
        "Cantidad de entrenamientos: " + entrenamientosRegistrados.length + "\n" +
        "Minutos totales: " + totalMinutos + "\n" +
        "Horas equivalentes: " + (totalMinutos / 60).toFixed(2)
    );

    break;
}


        
case "4": {
    const nombresEjercicios = obtenerNombresEjercicios();

    console.log("Nombres de ejercicios registrados:", nombresEjercicios);

    if (nombresEjercicios.length > 0) {
        alert(
            "EJERCICIOS REGISTRADOS\n\n" +
            nombresEjercicios.join("\n")
        );
    } else {
        alert("Todavía no registraste ningún entrenamiento.");
    }

    break;
}


        default:
            alert("Opción inválida. Elegí un número del 1 al 5.");
    }

} while (true);