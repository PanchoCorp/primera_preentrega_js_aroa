alert("Bienvenido al centro de gestión de turnos");

function pedirNombre() {
    let nombre = prompt("Ingrese su nombre/s");
    while (nombre == "") {
        nombre = prompt("Ingrese nombre nuevamente");
    }

    return nombre
}

function pedirApellido() {
    let apellido = prompt("Ingrese su apellido/s");
    while (apellido == "") {
        apellido = prompt("Ingrese apellido nuevamente");
    }

    return apellido
}

function pedirDni() {
    let dni = prompt("Ingrese su DNI");
    while (dni == "") {
        dni = prompt("Ingrese DNI nuevamente");
    }

    return dni
}

function pedirCelular() {
    let celular = parseFloat(prompt("Ingrese su número de celular"));
    while (celular == "") {
        celular = prompt("Ingrese su número de celular nuevamente");
    }

    return celular
}


let nombreUsuario = pedirNombre();
let apellidoUsuario = pedirApellido();
let dniUsuario = pedirDni();
let celularUsuario = pedirCelular();


function listaOpciones(lista) {
    switch (lista) {
        case 0:
            alert("Turno asignado: Médico clínico");
            break;

        case 1:
            alert("Turno asignado: Oftalmología");
            break;

        case 2:
            alert("Turno asignado: Ginecología");
            break;

        case 3:
            alert("Turno asignado: Gastroenterología");
            break;

        case 4:
            alert("Turno asignado: Otorrinolaringología");
            break;

        case 5:
            alert("Turno asignado: Traumatología");
            break;

        default:
            alert("DATO ERRONEO: Debe ingresar una opción válida");
            break;
    }

}


let opcionesTurno = 6

while (opcionesTurno >= 6) {
    opcionesTurno = parseFloat(prompt("Elija especialidad:\n\n 0: Médico Clínico\n 1: Oftalmología\n 2: Ginecología\n 3: Gastroenterología\n 4: Otorrinolaringología\n 5: Traumatología"))
    listaOpciones(opcionesTurno);
}


alert("Paciente: " + nombreUsuario + " " + apellidoUsuario + " " + "Número DNI: " + dniUsuario);
alert(" Se le enviaran los datos del turno asignado al: " + celularUsuario);
alert("hasta luego".toUpperCase());

