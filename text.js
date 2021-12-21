const listaProductos = [
  "1. Lemon Pie",
  "2. Marquise",
  "3. Pan dulce",
  "4. Cheesecake",
  "5. Selva Negra",
];
console.log("Bienvenido/a, ingrese el postre que desea encargar... ");
console.log("Esta es nuesta lista de opciones: ");
for (let i = 0; i < listaProductos.length; i++) {
  const element = listaProductos[i];
  console.log("\t" + element);
}
console.log("Si no desea nada, deje en blanco ...");

let seleccion;
let carrito = [];

do {
  seleccion = prompt("Ingrese el numero de opcion: ");
  if(seleccion <1 || seleccion >=5) {
    
    console.log("Por favor, seleccione entre las opciones dadas")
    salir = prompt("Desea salir? s / n");
    if(salir=="s"){
        break;
    }
}
else{
    carrito = [...carrito, listaProductos[seleccion - 1]];
    console.log("Se agregó " + listaProductos[seleccion - 1] + " a su carrito.");
}

} while (seleccion);

console.log("Gracias por comprar con nosotros.");
