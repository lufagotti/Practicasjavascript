const salida = null
let intentos = 1
let nombreAlumno = prompt ("Ingrese su nombre o ESC para salir")
let apellidoAlumno = prompt ("Ingrese su apellido o ESC para salir")


while ((nombreAlumno == "") || (apellidoAlumno == "")) {
    if (intentos==3){
        alert ("agotaste tus intentos, recarga la pagina")
        break
    }else{
        alert ("error,te quedan "+ (3-intentos) + " intentos ")
        intentos++
    }
    alert ("Ingrese su nombre y apellido")
    nombreAlumno = prompt ("Ingrese su nombre o ESC para salir")
    apellidoAlumno = prompt ("Ingrese su apellido o ESC para salir")
}
if((intentos<3)&&(nombreAlumno != salida) && (apellidoAlumno != salida)){
    alert ("Nombre:"+ nombreAlumno +"\n Apellido:"+ apellidoAlumno)
    let notas = parseInt (prompt ("Ingrese cantidad de nota"))
    calcularpromedio(notas)
}
function calcularpromedio(cantidad) {
    let i
    let sumar=0
    for (i=1; i<=cantidad; i++){
        sumar+=parseInt (prompt("ingrese nota"))
    }
    let resultado= sumar/cantidad
    if (resultado >=7){
        alert ("Nota final: "+ resultado + " ¡Felicidades aprobaste! ")
    }else{ 
        alert ("Nota final: "+ resultado + " Que lastima no aprobaste ")
    }
}