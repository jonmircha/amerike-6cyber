// 1. Crear un Arreglo de Productos:
let productos = [
  { nombre: "Camiseta", precio: 15, stock: 10 },
  { nombre: "Pantalón", precio: 20, stock: 17 },
  { nombre: "Zapatos", precio: 50, stock: 5 },
  { nombre: "Vestido", precio: 25, stock: 8 },
  { nombre: "Sudadera", precio: 30, stock: 20 },
];

//2. Agregar Productos al Carrito:

let carrito = [];

function agregarAlCarrito(productoNombre, cantidad) {
  for (let producto of productos) {
    if (producto.nombre === productoNombre) {
      if (producto.stock >= cantidad) {
        carrito.push({
          nombre: productoNombre,
          cantidad: cantidad,
          precio: productos.precio,
        });

        producto.stock -= cantidad;
        console.log(`* ${cantidad} ${productoNombre} agregados al carrito`);
        return;
      } else {
        console.log(`No hay suficiente stock del producto: ${productoNombre}`);
      }
    } else {
      console.log(
        `El producto "${productoNombre}" no existe en nuestro catálogo`
      );
    }
  }
}
