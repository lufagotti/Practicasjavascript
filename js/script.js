const salida = "ESC"
let nombreAlumno = prompt ("Ingrese su nombre o ESC para salir")
let apellidoAlumno = prompt ("Ingrese su apellido o ESC para salir")


for (let nombreAlumno=1; nombreAlumno <= 8; nombreAlumno++) {
    if ((nombreAlumno != "") && (apellidoAlumno != "")){
        alert ("Nombre:"+ nombreAlumno +"\n Apellido:"+ apellidoAlumno)
        break;
    }else{
        alert ("Ingrese su nombre y apellido")
        let nombreAlumno = prompt ("Ingrese su nombre o ESC para salir")
        let apellidoAlumno = prompt ("Ingrese su apellido o ESC para salir")
    }
    while ((nombreAlumno == "ESC") && (apellidoAlumno == "ESC")){
        break
    }
}

