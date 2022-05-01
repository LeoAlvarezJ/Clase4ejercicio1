// EJERCICIO 1
// sintaxis de if

// if (condicion) {
//    acción que se ejecuta
//    si la condicion es verdadera
//} else {
//  otra acción que se realiza si
//  no es verdadera
//}

let dato = document.getElementById("dato");
let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", () => {
  let datoExtraido: number = Number(dato.value);

  if (datoExtraido > 34) {
    console.log("El numero es mayor a 34");
  } else {
    console.log("el numero es menor o igual que 34");
  }
});
