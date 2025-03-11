//1. Almacenar en constantes los elementos HTML en JS
const d = document;
const $listaCarrito = d.querySelector("#lista-carrito");
const $totalCarrito = d.querySelector("#total-carrito");
const $btnCompra = d.querySelector("#btn-compra");
const $mensajeCompra = d.querySelector("#mensaje-compra");
const $carrito = d.querySelector("#carrito");
const $productos = d.querySelectorAll(".producto");

console.log($listaCarrito, $totalCarrito, $btnCompra, $mensajeCompra, $carrito);
console.log($productos);

//$listaCarrito.innerHTML = "<li>Elemento 1</li><li>Elemento 2</li>";
//$listaCarrito.textContent = "<li>Elemento 1</li><li>Elemento 2</li>";

//Delegamos el evento click al document
d.addEventListener("click", function (e) {
  // Solo cuando el click lo haga un producto se ejecuta la siguiente programación
  if (e.target.matches(".producto")) {
    console.log(e);
    // Se captura el objeto que origino el evento en una variable
    const $producto = e.target;
    // Se extraen atributos del objeto que origino el evento
    let nombre = $producto.getAttribute("data-nombre");
    let precio = parseFloat($producto.getAttribute("data-precio"));
    console.log(nombre, precio);

    // Se crea dinámicamente un etiqueta li
    const $itemCarrito = d.createElement("li");
    // Se le asigna contenido textual a la li
    $itemCarrito.textContent = `${nombre} - $${precio}`;

    // Se agrega la li a un elemento ul existente en el HTML
    $listaCarrito.appendChild($itemCarrito);

    //Actualizar el carrito de compras
    console.log($totalCarrito.textContent);
    let totalActual = parseFloat($totalCarrito.textContent);
    $totalCarrito.textContent = (totalActual + precio).toFixed(2);
  }

  return false;
});

//Simulación de Compra
$btnCompra.addEventListener("click", function (e) {
  if ($listaCarrito.children.length > 0) {
    $mensajeCompra.classList.remove("hidden");
    setInterval(function () {
      $mensajeCompra.classList.add("hidden");
      $listaCarrito.innerHTML = "";
      $totalCarrito.textContent = 0;
    }, 5000);
  } else {
    alert("El carrito esta vacío");
  }
});
